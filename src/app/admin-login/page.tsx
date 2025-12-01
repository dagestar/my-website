"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      router.push("/admin");
    } else {
      const data = await response.json();
      setError(data?.message ?? "Login failed");
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-slate-900">Admin Login</h1>
        <p className="text-sm text-slate-600">
          This login protects the dashboard that lists all contact submissions.
          Change the password via environment variable.
        </p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter admin password"
          className="w-full rounded-2xl border border-slate-300 px-4 py-2 text-sm"
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

