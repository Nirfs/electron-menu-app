export async function getDish() {
  const rep = await fetch("data/data.json");

  if (!rep.ok) {
    throw new Error("Impossible de récupérer les plats");
  }

  return await rep.json();
}
