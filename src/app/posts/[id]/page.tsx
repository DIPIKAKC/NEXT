//for params


interface PostPageProps{
    id:string
}

export default async function IndividualPost({params}: {params:Promise<PostPageProps>}) {
    console.log(await params);
    return (
        <div>

        </div>
    )
}
