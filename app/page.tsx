import { Button } from "@/components/ui/button";
import  Container  from "@/components/Container";

export default function Home() {
  return (
    <div className = "bg-bodyColor text-white/80 ">
      <Container>
        <p>My portfolio</p>
        <Button>Click me</Button>
      </Container>
    </div>
  );
}
