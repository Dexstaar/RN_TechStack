export const selectLibrary = (libraryId) => {
    // console.log('selectLibrary | libraryId ', libraryId);

    return {
        type: 'select_library',
        payload: libraryId
    };
};