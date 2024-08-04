import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";

export default async function NewListingPage() {
  const { user } = await getUser();

  if (!user) {
    return (
      <div className="container">
        <div>You need to be logged in to post a job</div>
      </div>
    );
  }
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  null;

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  return (
    <div className="container">
      <div>
        {JSON.stringify(organizationMemberships)}
        <h2 className="text-lg mt-6">Your companies</h2>
        <p className="text-gray-500 text-sm mb-2">
          Select a company to post a job for
        </p>
        <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
          No companies found assigned to your user
        </div>

        <h2 className="text-lg mt-4">Create a new company</h2>
        <p className="text-gray-500 text-sm mb-2">
          To create a job listing your first register a company
        </p>

        <form
          action={() => {
            "use server";
            workos.organizations.createOrganization({ name: "test" });
          }}
          className="flex gap-2"
        >
          <input
            className="p-2 border border-gray-400 rounded-md"
            type="text"
            placeholder="company name"
          />

          <button
            type="submit"
            className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md"
          >
            Create a company
          </button>
        </form>
      </div>
    </div>
  );
}
