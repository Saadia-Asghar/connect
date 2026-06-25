import { DesignShell } from "@/components/layout/design-shell";
import { ChatBubble } from "@/components/chat/chat-bubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockChat } from "@/lib/mock-data";
import { Send } from "lucide-react";

export default function DesignChatPage() {
  return (
    <DesignShell title="Group chat" subtitle="Meetup members only — in-app">
      <div className="flex min-h-[60dvh] flex-col p-4">
        <div className="mb-4 rounded-card bg-pending/10 px-3 py-2 text-center text-xs text-pending">
          All coordination stays here. Phone numbers are blocked.
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <ChatBubble system message="Keep chat here — don't share personal numbers" />
          {mockChat.map((msg, i) => (
            <ChatBubble
              key={i}
              username={msg.username}
              message={msg.message}
              sent={msg.sent}
            />
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Input placeholder="Message the group..." className="flex-1" />
          <Button size="icon" variant="primary" aria-label="Send">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DesignShell>
  );
}
