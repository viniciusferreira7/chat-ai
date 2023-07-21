import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center bg-zinc-800">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>CHAT AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>VF</AvatarFallback>
              <AvatarImage src="https://github.com/viniciusferreira7.png" />
            </Avatar>
            <p className="leading-relaxed">
              <strong className="block font-bold text-slate-700">
                Humano:
              </strong>
              What&apos;s your opinion about Typescript?
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src="https://github.com/openai.png" />
            </Avatar>
            <p className="leading-relaxed">
              <strong className="block font-bold text-slate-700">AI:</strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              consectetur ad qui culpa possimus molestias perferendis deleniti,
              reprehenderit eaque blanditiis non soluta dignissimos repellat
              aliquam laudantium deserunt voluptas aspernatur numquam?
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
