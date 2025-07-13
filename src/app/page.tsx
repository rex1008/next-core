import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";


export default function Home() {
  return (
    <ClientComponent>
      <ServerComponent/>
    </ClientComponent>
  )
}
