import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { ReactNode, type ElementType } from "react"

type AlertVariant = "default" | "destructive"

interface CustomeAlertAlertProps {
  variant?: AlertVariant
  title: string
  description: string
  icon?: ElementType,
  action?: ReactNode
}

export const CustomeAlert = ({
  variant = "default",
  title,
  description,
  icon: Icon = Terminal,
  action
}: CustomeAlertAlertProps) => {
    console.log(description);
  return (
    <Alert variant={variant}>
      <Icon className="h-4 w-4" />
      <div className="flex flex-col gap-2">
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </div>
        {action && <div>{action}</div>}
      </div>
    </Alert>
  )
}