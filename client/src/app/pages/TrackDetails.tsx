import * as React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { ITrack } from '../models';
import { IRockTracksState } from '../reducers/rockTracksReducer';
import { fetchCurrentTrack } from '../actions';
import { millisToTime, formatDate } from '../utils';

import { IAction } from '../../core';

export interface ITrackDetailsProps {
    track: ITrack;
    loading: boolean;
    error: boolean;

    fetchTrack: (trackId: number) => void;
};

const mapStateToProps = (state: IRockTracksState, ownProps: ITrackDetailsProps): ITrackDetailsProps => ({
    ...ownProps,

    track: state.currentTrack,
    loading: state.loading,
    error: state.error,
});

export const mapPropsToDispatch = (dispatch: (action: IAction)=>void): Partial<ITrackDetailsProps> => ({
    fetchTrack: (trackId: number) => dispatch(fetchCurrentTrack(trackId)),
});

const TrackDetailsPage: React.SFC<ITrackDetailsProps> = ({
    track,
    loading,
    error,
    fetchTrack,
}) => {
    const { trackId } = useParams();

    React.useEffect(() => {
        fetchTrack(trackId);
    }, [fetchTrack]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>There was a problem loading the track</p>}

            {track && (
                <>
                    <h3>{track.trackName}</h3>
                    <p>By {track.artistName}</p>
                    <p>Price: ${track.trackPrice}</p>
                    <p>Duration: {millisToTime(track.trackTimeMillis)}</p>
                    <p>Release date: {formatDate(track.releaseDate)}</p>
                    <p><a href={track.artworkUrl100} target="_blank">Artwork</a></p>
                    <p><a href={track.trackViewUrl} target="_blank">More details</a></p>
                </>
            )}
        </div>
    )
};

export default connect(mapStateToProps, mapPropsToDispatch)(TrackDetailsPage);
