import React from 'react'

export default interface DataType {
//   key: React.Key;
    key: number;
    course: string;
    grade: string;
    credits: number;
    credits_received: number;
    is_repeated: boolean;
    is_sx: boolean;
}