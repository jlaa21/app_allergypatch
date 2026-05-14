import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export type Medication = {
  id: number;
  Medicamento: string;
  'De Grott(171)': string;
  Comercial: string;
  Bibliografía: string;
};

export async function getMedications(): Promise<Medication[]> {
  // Construimos la ruta absoluta al archivo para que funcione tanto en local como en despliegues.
  const filePath = path.join(process.cwd(), 'public', 'data', 'medications.csv');
  
  try {
    // Leemos el archivo directamente desde el disco. Esto evita errores de red durante el build.
    const csvText = fs.readFileSync(filePath, 'utf-8');
    
    return new Promise((resolve, reject) => {
      Papa.parse<Medication>(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          const filteredData = results.data.filter(row => 
            row.Medicamento && String(row.Medicamento).trim() !== ''
          );
          resolve(filteredData);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("Error leyendo el archivo CSV local:", error);
    return [];
  }
}