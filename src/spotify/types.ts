// Types used everywhere in the application

// Used for Spotify song analysis endpoint request
export interface ISpotifyDanceability {
    acousticness: number,
    analysis_url: string,
    danceability: number,
    duration_ms: number,
    energy: number,
    id: string,
    instrumentalness: number,
    key: number,
    liveness: number,
    loudness: number,
    mode: number,
    speechiness: number,
    tempo: number,
    time_signature: number,
    track_href: string,
    type: string,
    uri: string,
    valence: number,
} 

// Data structure stored in Firebase Firestore
export interface track {
    id: string,
    uri: string,
    metrics: ISpotifyDanceability,
}