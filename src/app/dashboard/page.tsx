import CodeBlock from "@/components/code-block";
import SvgText from "@/components/svg-text";
import { db } from "@/db";
import { getUserEmail } from "@/lib/utils";
// import { currentUser } from "@clerk/nextjs"; // Comment out this line

// Temporary user mock
const mockUser = { firstName: "Guest", id: "mock-id" };

export async function generateMetadata() {
  // const user = await currentUser();
  return {
    title: `${mockUser.firstName}'s Dashboard`,
  };
}

export default async function page() {
  // const user = await currentUser();
  const user = mockUser; // Use mock user instead
  // if (!user || !user.id) redirect("/auth-callback?origin=/");

  // const email = getUserEmail(user);
  const email = "mock@example.com"; // Use a mock email

  // Comment out or remove the database query for now
  // const dbUser = await db.user.findUnique({
  //   where: {
  //     email: email
  //   }
  // });

  // if (!dbUser) redirect("/auth-callback?origin=/dashboard");

  // revalidatePath("/auth-callback");

  return (
    <div className="h-[60vh] w-full justify-center items-center flex px-4 flex-col ">
      <h1 className="justify-center space-y-3 text-2xl font-extrabold tracking-normal text-center scroll-m-20 md:text-4xl lg:text-5xl">
        Hi {user ? user?.firstName : "Guest"}!
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6  max-w-md text-center text-muted-foreground">
        Are you excited to build something amazing using{" "}
        {<br className="hidden sm:flex" />} the latest libraries and the stacks?
      </p>
      <div className="relative ">
        <CodeBlock />
        <div className="absolute -bottom-14 right-6">
          <SvgText />
        </div>
      </div>
    </div>
  );
}
