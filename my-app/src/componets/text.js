
export default function Example() {

    const indexes = [1, 4, 6, 8, 10]
    const array = ['The', 'Three', 'Little', 'Pig', 'The', 'story', 'of', 'The', 'Three', 'Little', 'Pigs', 'featured', 'here', 'has', 'been', 'adapted', 'from', 'different', 'sources', 'and', 'from', 'childhood', 'memory', '.', 'The', 'primary', 'sources', 'are', 'English', 'Fairy', 'Tales', ',', 'retold', 'by', 'Flora', 'Annie', 'Steel', '(', '1922', ')', 'with', 'illustrations', 'by', 'L.', 'Leslie', 'Brooke', 'from', 'the', '1904', 'version', '.', 'This', 'story', 'is', 'featured', 'in', 'our', 'Favorite', 'Fairy', 'Tales', 'and', 'Children', "'s", 'Stories', '.', 'Once', 'upon', 'a', 'time', 'there', 'was', 'an', 'old', 'mother', 'pig', 'who', 'had', 'three', 'little', 'pigs', 'and', 'not', 'enough', 'food', 'to', 'feed', 'them', '.', 'So', 'when', 'they', 'were', 'old', 'enough', ',', 'she', 'sent', 'them', 'out', 'into', 'the', 'world', 'to', 'seek']
    return (

        <div>
            <h1>The Three Little Pig</h1>
            <div>
                {array.map((word, index) =>
                    indexes.some(item => index === item) ?
                        <span className="text-red-600"
                            onMouseEnter={() => console.log("in")}
                            onMouseLeave={() => console.log("out")}
                        > {word + ' '}</span>
                        :
                        word + ' '
                )}
            </div>
        </div >
    )
}
