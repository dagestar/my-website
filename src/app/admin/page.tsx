import { readContactSubmissions } from "@/lib/storage";
import { AdminDashboard } from "@/components/AdminDashboard";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const submissions = await readContactSubmissions();
  const settings = await getSiteSettings();

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Admin Dashboard
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Contact form submissions
          </h1>
          <p className="text-sm text-slate-500">
            Data is stored temporarily in JSON. Connect a database for production.
          </p>
        </div>
        <AdminDashboard
          submissions={submissions}
          showCustomerWall={settings.showCustomerWall}
        />
      </div>
    </div>
  );
}

