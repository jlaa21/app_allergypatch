import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PoliticaDePrivacidad() {
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
          <h1>Política de Privacidad</h1>
          <p>
            Tu privacidad es importante para nosotros. Es política de AllergyPatch Lookup respetar tu privacidad con respecto a cualquier información que podamos recopilar de ti a través de nuestra aplicación.
          </p>
          <h2>1. Información que Recopilamos</h2>
          <p>
            No recopilamos ninguna información de identificación personal sobre ti cuando usas nuestra aplicación.
          </p>
          <h2>2. Uso de la Información</h2>
          <p>
            Dado que no recopilamos ninguna información personal, no la usamos de ninguna manera. La funcionalidad de búsqueda se realiza localmente en tu dispositivo.
          </p>
          <h2>3. Seguridad</h2>
          <p>
            La seguridad de tus datos es importante para nosotros, pero recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
          </p>
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
