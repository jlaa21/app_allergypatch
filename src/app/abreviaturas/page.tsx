import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Abreviaturas() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-card/80 backdrop-blur-sm border-b py-4 sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1>Abreviaturas</h1>
          <ul className="list-disc pl-5">
            <li><strong>vas:</strong> Vaselina</li>
            <li><strong>alc:</strong> Alcohol</li>
            <li><strong>prg:</strong> Propilenglicol</li>
            <li><strong>oo:</strong> Aceite de oliva (olive oil)</li>
            <li><strong>mek:</strong> Metiletilcetona</li>
            <li><strong>epi:</strong> Epicutánea</li>
            <li><strong>FS:</strong> Fotosensible</li>
          </ul>
        </div>
      </main>
      <footer className="py-6 mt-auto border-t bg-card/50">
          <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} AllergyPatch Lookup. Todos los derechos reservados.</p>
          </div>
      </footer>
    </div>
  );
}
