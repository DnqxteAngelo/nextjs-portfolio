import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BlogPage(){
    return (
        <div className="min-h-screen p-10">
          <div className="text-4xl font-bold">Building a Simple Website with Next.js and shadcn/ui</div>
          <div className="text-muted-foreground mt-4 p-4">Published on: July 2, 2024</div>
          <Separator />
          <p className="text-lg mt-8">
            Next.js is a powerful React framework for building web applications, and shadcn/ui provides a set of high-quality UI components. 
          </p>
          <p className="text-lg">
            In this tutorial, we'll walk through creating a simple website using Next.js and shadcn/ui.
          </p>
          <div className="text-xl font-semibold mt-8">
            Step 1: Setting Up Your Environment
          </div>
          <p className="text-md mt-4">
            First, make sure you have Node.js and npm installed. You can download them from nodejs.org.
          </p>
          <p className="text-md mt-4">
            Next, create a new Next.js project:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-full md:w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">npx create-next-app@latest my-website</p>
                  <p className="text-white dark:text-black font-mono text-sm"><span className="text-yellow-500">cd</span> my-website</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-xl font-semibold mt-8">
            Step 2: Installing shadcn/ui
          </div>
          <p className="text-md mt-4">
            Install shadcn/ui using npm:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">npm install @shadcn/ui</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-xl font-semibold mt-8">
            Step 3: Creating Pages and Components
          </div>
          <p className="text-md mt-4">
            Next.js uses a file-based routing system. Create a simple home page and an about page.
          </p>
          <p className="text-md mt-4">
            Create `pages/index.js`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">
                    <span className="text-blue-500">import</span> 
                    { ' { ' }<span className="text-red-500">Button</span>{ ' } ' }  from <span className="text-green-500">'@shadcn/ui'</span>;
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm mt-4">
                    <span className="text-blue-500">export default function </span> 
                    <span className="text-red-500">Home</span>{'()'}{ ' { '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    <span className="text-blue-500">return </span>{'('}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'<div '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"container mx-auto px-4 py-8"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<h1 '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"text-3xl font-bold"</span>{'>'}
                    Welcome to My Website{'</h1>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<p '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"mt-4"</span>{'>'}
                    This is a simple website built with Next.js and shadcn/ui.{'</p>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<Button '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"mt-4" </span>
                    <span className="text-pink-500">onClick</span>=<span className="text-green-500">{'{() '}</span>{'=> '}
                    alert{'('}'Button clicked!'{')}'}{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-16">
                    Click Me
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'</Button> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'</div> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    {'); '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm">
                    {'} '}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-md mt-4">
            Create `pages/about.js`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">
                    <span className="text-blue-500">export default function </span> 
                    <span className="text-red-500">About</span>{'()'}{ ' { '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    <span className="text-blue-500">return </span>{'('}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'<div '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"container mx-auto px-4 py-8"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<h1 '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"text-3xl font-bold"</span>{'>'}
                    About Us{'</h1>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<p '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"mt-4"</span>{'>'}
                    We are passionate developers building cool stuff.{'</p>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'</div> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    {'); '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm">
                    {'} '}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-xl font-semibold mt-8">
            Step 4: Adding Navigation
          </div>
          <p className="text-md mt-4">
            To navigate between pages, create a simple navigation bar.
          </p>
          <p className="text-md mt-4">
            Create `components/NavBar.js`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">
                    <span className="text-blue-500">import </span> 
                    <span className="text-red-500">Link</span> from <span className="text-green-500">'next/link'</span>;
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm mt-4">
                    <span className="text-blue-500">export default function </span> 
                    <span className="text-red-500">NavBar</span>{'()'}{ ' { '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    <span className="text-blue-500">return </span>{'('}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'<nav '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"bg-gray-800 p-4"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<ul '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"flex space-x-4"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-16">
                    {'<li> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-20">
                    {'<Link '}
                    <span className="text-pink-500">href</span>=<span className="text-green-500">"/"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-24">
                    {'<a '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"text-white"</span>{'>'}
                    Home{'</a>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-20">
                    {'</Link> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-16">
                    {'</li> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-16">
                    {'<li> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-20">
                    {'<Link '}
                    <span className="text-pink-500">href</span>=<span className="text-green-500">"/"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-24">
                    {'<a '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"text-white"</span>{'>'}
                    About{'</a>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-20">
                    {'</Link> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-16">
                    {'</li> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'</ul> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'</nav> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    {'); '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm">
                    {'} '}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-md mt-4">
            Update your pages to include the `NavBar` component.
          </p>
          <p className="text-md mt-4">
            Update `pages/index.js`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">
                    <span className="text-blue-500">import</span> 
                    <span className="text-red-500"> NavBar</span> from <span className="text-green-500">'../components/NavBar'</span>;
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm">
                    <span className="text-blue-500">import</span> 
                    { ' { ' }<span className="text-red-500">Button</span>{ ' } ' }  from <span className="text-green-500">'@shadcn/ui'</span>;
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm mt-4">
                    <span className="text-blue-500">export default function </span> 
                    <span className="text-red-500">Home</span>{'()'}{ ' { '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    <span className="text-blue-500">return </span>{'('}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'<NavBar /> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'<div '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"container mx-auto px-4 py-8"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<h1 '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"text-3xl font-bold"</span>{'>'}
                    Welcome to My Website{'</h1>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<p '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"mt-4"</span>{'>'}
                    This is a simple website built with Next.js and shadcn/ui.{'</p>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<Button '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"mt-4" </span>
                    <span className="text-pink-500">onClick</span>=<span className="text-green-500">{'{() '}</span>{'=> '}
                    alert{'('}'Button clicked!'{')}'}{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-16">
                    Click Me
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'</Button> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'</div> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    {'); '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm">
                    {'} '}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-md mt-4">
            Update `pages/about.js`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                <p className="text-white dark:text-black font-mono text-sm">
                    <span className="text-blue-500">import</span> 
                    <span className="text-red-500"> NavBar</span> from <span className="text-green-500">'../components/NavBar'</span>;
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm mt-4">
                    <span className="text-blue-500">export default function </span> 
                    <span className="text-red-500">About</span>{'()'}{ ' { '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    <span className="text-blue-500">return </span>{'('}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'<NavBar /> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'<div '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"container mx-auto px-4 py-8"</span>{'>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<h1 '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"text-3xl font-bold"</span>{'>'}
                    About Us{'</h1>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-12">
                    {'<p '}
                    <span className="text-pink-500">className</span>=<span className="text-green-500">"mt-4"</span>{'>'}
                    We are passionate developers building cool stuff.{'</p>'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8">
                    {'</div> '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    {'); '}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm">
                    {'} '}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-xl font-semibold mt-8">
            Step 5: Styling with Tailwind CSS
          </div>
          <p className="text-md mt-4">
            Install Tailwind CSS to style your application.
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">npm install tailwindcss postcss autoprefixer</p>
                  <p className="text-white dark:text-black font-mono text-sm">npx tailwindcss init -p</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-md mt-4">
            Configure Tailwind CSS by updating `tailwind.config.js`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm"><span className="text-pink-500">module</span>.exports = {'{'}</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4"><span className="text-pink-500">content</span>: {'['}</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8"><span className="text-green-500">'./pages/**/*.{'{'}js,ts,jsx,tsx{'}'}'</span>,</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8"><span className="text-green-500">'./components/**/*.{'{'}js,ts,jsx,tsx{'}'}'</span>,</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">{'],'}</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4"><span className="text-pink-500">theme</span>: {'{'}</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-8"><span className="text-pink-500">extend</span>: {'{}'},</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">{'},'}</p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4"><span className="text-pink-500">plugins</span>: {'[]'},</p>
                  <p className="text-white dark:text-black font-mono text-sm">{'};'}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-md mt-4">
            Add Tailwind CSS to your `styles/globals.css`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm"><span className="text-blue-500">@tailwind</span> base;</p>
                  <p className="text-white dark:text-black font-mono text-sm"><span className="text-blue-500">@tailwind</span> components;</p>
                  <p className="text-white dark:text-black font-mono text-sm"><span className="text-blue-500">@tailwind</span> utilities;</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-md mt-4">
            Import the global styles in `_app.js`:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                <p className="text-white dark:text-black font-mono text-sm">
                    <span className="text-blue-500">import</span> 
                    <span className="text-green-500">'../styles/globals.css'</span>;
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm mt-4">
                    <span className="text-blue-500">export default function </span> 
                    <span className="text-red-500">MyApp</span>{'({ Component, pageProps }) {'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm indent-4">
                    <span className="text-blue-500">return </span>{'<Component {'}<span className="text-pink-500">...pageProps</span>{'} />;'}
                  </p>
                  <p className="text-white dark:text-black font-mono text-sm">
                    {'}'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-xl font-semibold mt-8">
            Step 6: Running the Application
          </div>
          <p className="text-md mt-4">
            Run your Next.js application:
          </p>
          <div className="overflow-x-auto">
            <Card className="w-[800px] rounded-lg mt-4">
              <CardTitle className="bg-secondary rounded-lg h-[30px]"></CardTitle>
              <CardContent className="bg-primary rounded-lg">
                <div className="p-4">
                  <p className="text-white dark:text-black font-mono text-sm">npm run dev</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-md mt-4 mb-4">
            Open your browser and navigate to `http://localhost:3000` to see your simple website in action!
          </p>
          <Separator />
          <p className="text-md mt-4 font-bold">
            Conclusion
          </p>
          <div className="w-full md:w-[800px]">
            <p className="text-md mt-4">
            Congratulations! You’ve built a simple website using Next.js and shadcn/ui.
            This setup provides a solid foundation for more complex projects.
            Stay tuned for more tutorials on adding advanced features and improving your web development skills.
            </p>
          </div>
          <div className="w-full md:w-[800px]">
            <p className="text-md mt-4">
            Feel free to leave a comment or reach out if you have any questions or feedback. Happy coding!
            </p>
          </div>
        </div>
    )
}