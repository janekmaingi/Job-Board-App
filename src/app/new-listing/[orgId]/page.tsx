import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";

type PageProps = {
  params: {
    orgId: string;
  };
};

export default async function NewListingForOrgPage(props: PageProps) {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  if (!user) return "Please log in";
  const orgId = props.params.orgId;

  const oms = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
  });

  const om = oms.data.find((om) => om.organizationId === orgId);
  const hasAccess = oms.data.length > 0;

  if (!hasAccess) {
    return "no access";
  }

  return (
    <form action="" className="container mt-6">
      <input className="border p-2" placeholder="job title" type="job title" />
    </form>
  );
}
