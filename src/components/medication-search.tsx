'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { MedicationCard } from '@/components/medication-card';
import type { Medication } from '@/lib/data';
import { Search } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface MedicationSearchProps {
  medications: Medication[];
}

export function MedicationSearch({ medications }: MedicationSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedications = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return medications;
    }
    return medications.filter(med =>
      (med.Medicamento && String(med.Medicamento).toLowerCase().includes(term))
    );
  }, [searchTerm, medications]);

  return (
    <>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <Input
            type="search"
            aria-label="Buscar medicamento"
            placeholder="Buscar por medicamento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-4 text-base h-14 w-full rounded-full border-2 bg-card focus:border-primary focus:ring-primary/20 focus:ring-4 transition-shadow shadow-sm"
          />
        </div>
      </div>
      
      {filteredMedications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMedications.map((med, index) => (
            <MedicationCard key={index} medication={med} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card rounded-lg shadow-sm mt-8">
          <p className="text-xl font-semibold text-foreground">No se encontraron resultados</p>
          <p className="text-muted-foreground mt-2">Pruebe a buscar con otro nombre de medicamento.</p>
        </div>
      )}
    </>
  );
}