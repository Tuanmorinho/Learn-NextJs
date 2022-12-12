
import * as React from 'react';
import useSWR from 'swr'

export interface IStuudentDetailProps {
    studentId: string
}

export function StudentDetail(props: IStuudentDetailProps) {

    const { data, error, mutate, isValidating } = useSWR(`/students/${props.studentId}`)

    return (
        <div>
            Name: {data?.name || '--'}
        </div>
    );
}
