import Container from "@/components/ui/container"

function Footer() {
  return (
    <footer className="bg-white border-t">
        <Container>
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-black">
                    &copy; 2023 FakeStoreName, Inc, All Rights Reserved
                </p>

            </div>
        </Container>
    </footer>
  )
}

export default Footer