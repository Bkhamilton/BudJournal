import React from 'react';

export function truncateString(str, length) {
    if (str.length <= length) {
        return entry;
    } else {
        return(str.slice(0, length) + "...")
    }
}