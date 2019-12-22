import { ITrack } from "../models";
import { IAction } from "../../core";
import { IActionTypes, ISetTracksPayload } from "../actions";
import { ISetCurrentTrackPayload } from "../actions/setCurrentTrack";

export interface IRockTracksState {
    tracks: ITrack[] | null;
    currentTrack: ITrack | null;
    loading: boolean;
    error: boolean;
}

const INITIAL_STATE: IRockTracksState = {
    tracks: null,
    currentTrack: null,
    error: false,
    loading: false
};

export const rockTracksReducer = (state: IRockTracksState = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case IActionTypes.FetchTracks:
            return {
                ...state,
                currentTrack: null,
                error: false,
                loading: true
            };

        case IActionTypes.FetchCurrentTrack:
                return {
                    ...state,
                    tracks: null,
                    error: false,
                    loading: true
                };

        case IActionTypes.SetTracks:
            return {
                ...state,
                currentTrack: null,
                error: false,
                loading: false,
                tracks: (<ISetTracksPayload>action.payload).tracks
            };

        case IActionTypes.SetCurrentTrack:
                return {
                    ...state,
                    tracks: null,
                    currentTrack: (<ISetCurrentTrackPayload>action.payload).track,
                    error: false,
                    loading: false,
                };

        case IActionTypes.SetError: 
            return {
                ...state,
                currentTrack: null,
                loading: null,
                tracks: null,
                error: true
            };

        default:
            return state;
    }
};
