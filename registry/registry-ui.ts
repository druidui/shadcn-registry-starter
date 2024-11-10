import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["ui/accordion.tsx"],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
              },
            },
            animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
            },
          },
        },
      },
    },
  },
  {
    name: "chatbot",
    type: "registry:ui",
    dependencies: [
      "react-timeago",
      "@types/react-timeago",
      "@ai-sdk/anthropic",
      "lucide-react",
      "ai",
    ],
    files: [
      {
        path: "ui/chatbot.tsx",
        type: "registry:ui",
      },
      {
        path: "api/chat/route.ts",
        target: "app/api/chat/route.ts",
        type: "registry:page",
      },
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
];