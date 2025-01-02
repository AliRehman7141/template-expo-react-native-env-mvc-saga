import { useState } from 'react';

const useController = () => {

    const [refreshing, setRefreshing] = useState<boolean>(false)

    const onRefresh = () => {

    }

    return {
        refreshing,

        onRefresh,
    }
};

export default useController;
