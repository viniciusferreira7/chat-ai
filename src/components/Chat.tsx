'use client'

import { useChat } from 'ai/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'

export function Chat() {
  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api: '/api/chat',
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>CHAT AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full h-[640px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex gap-3 text-slate-600 text-sm mt-4"
            >
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>VF</AvatarFallback>
                  <AvatarImage src="https://github.com/viniciusferreira7.png" />
                </Avatar>
              )}
              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://github.com/openai.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <strong className="block font-bold text-slate-700">
                  {message.role === 'user' ? 'Usuário' : 'AI'}
                </strong>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
