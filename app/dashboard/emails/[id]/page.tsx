type Props = {
    params: {
        id: string;
    }
}

export default function Email({ params }: Props) {
    return (
        <div>{params.id}</div>
    )
}