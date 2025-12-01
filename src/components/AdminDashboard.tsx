"use client";

import { useMemo, useState, useTransition } from "react";
import { ContactSubmission } from "@/types/contact";
import { useRouter } from "next/navigation";

type FilterRange = "all" | "7" | "30";

function isWithinRange(date: Date, days: number) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return date >= cutoff;
}

export function AdminDashboard({
  submissions,
  showCustomerWall,
}: {
  submissions: ContactSubmission[];
  showCustomerWall: boolean;
}) {
  const [range, setRange] = useState<FilterRange>("all");
  const [isPending, startTransition] = useTransition();
  const [wallVisible, setWallVisible] = useState(showCustomerWall);
  const router = useRouter();
  const [isToggling, setToggling] = useState(false);
  async function toggleWall() {
    setToggling(true);
    const nextValue = !wallVisible;
    try {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ showCustomerWall: nextValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to update settings");
      }

      setWallVisible(nextValue);
      router.refresh();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setToggling(false);
    }
  }

  const filtered = useMemo(() => {
    if (range === "all") return submissions;
    const days = range === "7" ? 7 : 30;
    return submissions.filter((entry) =>
      isWithinRange(new Date(entry.createdAt), days),
    );
  }, [range, submissions]);

  const sorted = useMemo(
    () =>
      [...filtered].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [filtered],
  );

  const formattedCount = sorted.length.toString().padStart(2, "0");

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/admin-login");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Contact submissions
          </p>
          <p className="text-3xl font-semibold text-slate-900">
            {formattedCount} leads
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <select
            value={range}
            onChange={(event) => setRange(event.target.value as FilterRange)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm"
          >
            <option value="all">All time</option>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
          </select>
          <button
            type="button"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm"
            onClick={() =>
              startTransition(() => {
                router.refresh();
              })
            }
          >
            {isPending ? "Refreshing..." : "Refresh"}
          </button>
          <a
            href="/api/contact/export"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm"
          >
            Export CSV
          </a>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Customer wall visibility
            </p>
            <p className="text-sm text-slate-500">
              Control whether the customer photo wall appears on the homepage.
            </p>
          </div>
          <button
            type="button"
            onClick={toggleWall}
            className={`rounded-full px-5 py-2 text-sm font-semibold text-white ${
              wallVisible ? "bg-emerald-500" : "bg-slate-400"
            }`}
            disabled={isToggling}
          >
            {isToggling
              ? "Updating..."
              : wallVisible
                ? "Hide customer wall"
                : "Show customer wall"}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Business</th>
              <th className="px-4 py-3">Needs</th>
              <th className="px-4 py-3">1688 Links</th>
              <th className="px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sorted.map((entry) => (
              <tr key={entry.id} className="align-top">
                <td className="px-4 py-3 font-semibold text-slate-900">
                  {entry.name}
                  <div className="text-xs text-slate-400">{entry.whatsapp}</div>
                </td>
                <td className="px-4 py-3">
                  <a href={`mailto:${entry.email}`} className="underline">
                    {entry.email}
                  </a>
                </td>
                <td className="px-4 py-3">{entry.country}</td>
                <td className="px-4 py-3">{entry.businessType}</td>
                <td className="px-4 py-3 whitespace-pre-wrap text-xs text-slate-600">
                  {entry.productNeeds}
                </td>
                <td className="px-4 py-3 text-xs text-slate-600">
                  {entry.links1688}
                </td>
                <td className="px-4 py-3 text-xs text-slate-500">
                  {new Date(entry.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-sm text-slate-500"
                >
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

