import { getMedications } from '@/lib/data';
import { Stethoscope, Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MedicationSearch } from '@/components/medication-search';

// Forzamos la generación estática para máximo rendimiento en Cloudflare
export const dynamic = 'force-static';

export default async function Home() {
  const medications = await getMedications();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-card/80 backdrop-blur-sm border-b py-4 sticky top-0 z-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stethoscope className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-headline font-bold text-foreground">
              AllergyPatch Lookup
            </h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/condiciones-de-uso">Condiciones de uso</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/politica-de-privacidad">Política de privacidad</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/abreviaturas">Abreviaturas</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground tracking-tight">
            Consulta de Pruebas Epicutáneas
          </h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
            Busque un medicamento para encontrar las concentraciones recomendadas y referencias bibliográficas.
          </p>
        </div>

        <MedicationSearch medications={medications} />
        
      </main>

      <footer className="py-6 mt-auto border-t bg-card/50">
          <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} AllergyPatch Lookup. Todos los derechos reservados.</p>
          </div>
      </footer>
    </div>
  );
}