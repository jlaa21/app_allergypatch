import type { Medication } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical, Building2, BookOpenText, Pill } from 'lucide-react';

type MedicationCardProps = {
  medication: Medication;
};

function InfoItem({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
      <div className="flex-1">
        <h3 className="font-semibold text-muted-foreground">{label}</h3>
        <p className="text-foreground break-words">{value}</p>
      </div>
    </div>
  );
}

export function MedicationCard({ medication }: MedicationCardProps) {
  return (
    <article className="flex">
      <Card className="flex flex-col w-full bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg border-2 border-transparent hover:border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl font-headline font-semibold text-card-foreground">
            <Pill className="h-6 w-6 text-primary" />
            {medication.Medicamento}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow grid gap-5 pt-0">
          <InfoItem icon={FlaskConical} label="Concentración (De Grott)" value={medication['De Grott(171)']} />
          <InfoItem icon={Building2} label="Comercial" value={medication.Comercial} />
          <InfoItem icon={BookOpenText} label="Bibliografía" value={medication.Bibliografía} />
        </CardContent>
      </Card>
    </article>
  );
}
