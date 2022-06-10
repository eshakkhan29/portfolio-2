import { useEffect, useState } from 'react';

const UseSite = () => {
    const [sites, setSites] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSites(data))
    }, [])
    return [sites, setSites];
};

export default UseSite;