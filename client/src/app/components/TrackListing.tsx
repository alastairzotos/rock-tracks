import * as React from 'react';

import { ITrack } from '../models';

export interface ITrackListingProps {
    track: ITrack;
}

export const TrackListing: React.SFC<ITrackListingProps> = ({
    track,
}) => {
    return (
        <div style={{ border: "1px solid black", padding: 10 }}>
            <h3>{track.trackName}</h3>
            <p>By {track.artistName}</p>
            <p>Price: ${track.trackPrice}</p>
            <p>Artwork URL: {track.artworkUrl100}</p>
        </div>
    )
};
