import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <p className="text-center text-sm text-gray-400">
          © 2026 Biplab Mandal. Built with Next.js & Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}