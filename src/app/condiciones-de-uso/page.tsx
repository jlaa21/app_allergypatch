import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CondicionesDeUso() {
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
          <h1>Condiciones de Uso</h1>
          <p>
            Bienvenido a AllergyPatch Lookup. Al utilizar esta aplicación, aceptas cumplir y estar sujeto a los siguientes términos y condiciones de uso. Por favor, revísalos cuidadosamente.
          </p>
          <h2>1. Aceptación del Acuerdo</h2>
          <p>
            Tú aceptas los términos y condiciones descritos en este Acuerdo de Términos de Uso con respecto a nuestra aplicación. Este Acuerdo constituye el acuerdo completo y único entre nosotros y tú, y reemplaza todos los acuerdos, representaciones, garantías y entendimientos anteriores o contemporáneos con respecto a la aplicación.
          </p>
          <h2>2. Uso de la Aplicación</h2>
          <p>
            La aplicación y su contenido son para tu uso personal y no comercial. No debes utilizar esta aplicación para ningún propósito ilegal o no autorizado.
          </p>
          <h2>3. Limitación de Responsabilidad</h2>
          <p>
            La información proporcionada en esta aplicación es solo para fines informativos. No nos hacemos responsables de ninguna decisión tomada basada en la información proporcionada en la aplicación. Siempre consulta a un profesional médico calificado para obtener asesoramiento médico.
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
