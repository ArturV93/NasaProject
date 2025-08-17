import { getMarsPhotos } from "@/api/mars.api";
import { IMarsRoverPhotosQuery, IMarsState } from "@/types/mars.interfaces";
import { create } from "zustand";


export const useMarsStore = create<IMarsState>((set, get) => ({
    photos: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
    fetchRovers: async (query: IMarsRoverPhotosQuery) => {
        set({ loading: true, error: null });
        try {
            const data = await getMarsPhotos(query);
            set({ photos: data, loading: false, hasMore: data.length > 0 });
        } catch (err: any) {
            set({ error: err.response.data.message || "Failed to fetch rovers", loading: false });
        }
    },
    fetchNextPage: async (query: IMarsRoverPhotosQuery) => {
        const { page, photos, loading, hasMore } = get();
        if (loading || !hasMore) return;

        set({ loading: true });
        try {
            const nextPage = page + 1;
            const data = await getMarsPhotos({ ...query, page: nextPage });

            set({
                photos: [...photos, ...data],
                loading: false,
                page: nextPage,
                hasMore: data.length < 25, // If no data returned, no more pages
            });
        } catch (err: any) {
            set({ error: err.response?.data?.message || "Failed to fetch rovers", loading: false });
        }
    },
}));