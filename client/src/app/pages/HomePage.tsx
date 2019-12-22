import * as React from 'react';
import { connect } from 'react-redux';

import { ITrack } from '../models';
import { fetchTracks } from '../actions';
import { IRockTracksState } from '../reducers/rockTracksReducer';
import { TrackListing } from '../components';

import { IAction } from '../../core';

export interface IHomePageProps {
    loading: boolean;
    error: boolean;
    tracks: ITrack[];

    fetchTracks: () => void;
}

const mapStateToProps = (state: IRockTracksState, ownProps: IHomePageProps): IHomePageProps => ({
    ...ownProps,

    loading: state.loading,
    error: state.error,
    tracks: state.tracks,
});

const mapPropsToDispatch = (dispatch: (action: IAction)=>void): Partial<IHomePageProps> => ({
    fetchTracks: () => dispatch(fetchTracks()),
})

const HomePage: React.FC<IHomePageProps> = ({
    loading,
    error,
    tracks,
    fetchTracks,
}) => {
    React.useEffect(() => {
        fetchTracks();
    }, [fetchTracks]);

    return (
        <>
            <h1>Rock Tracks</h1>

            {loading && <p>Loading...</p>}
            {error && <p>There was an error loading the tracks</p>}

            {tracks && (
                tracks.map(track => 
                    <TrackListing key={track.trackId} track={track} />
                )
            )}
        </>
    )
};

export default connect(mapStateToProps, mapPropsToDispatch)(HomePage);
