type PinnedLocationStatus = 'PINNED' | 'TEMP';

interface Loc {
  lat: number,
  lng: number,
}

interface PinnedLocation {
  id: string,
  title: string,
  description?: string,
  lat: number,
  lng: number,
  status: PinnedLocationStatus,
}

interface StoreState {
  locations: PinnedLocation[],
}
