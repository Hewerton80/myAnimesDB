import { useEffect, useRef, useState, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import useAnime, { onlySomeAnimesFields } from '../../../hooks/useAnime';
import { Container } from './styles';
import IconButton from '@material-ui/core/IconButton';
import colors from '../../../assets/colors';
import AnimesList from '../AnimesList';
import { useDebouncedCallback } from 'use-debounce';
import { SearchContex } from '../../../contexts/SearchContex';
import { useRouter } from 'next/router';
import Spinner from '../Spinner';


function InputSearch() {

    const router = useRouter();

    const { getAnimes, animes: animesFounded, isLoadingAnimes } = useAnime();
    const { showSearch, handleShowSearch } = useContext(SearchContex);

    const [animeText, setAnimeText] = useState('');

    const inputRef = useRef<HTMLInputElement>();
    const containerRef = useRef<HTMLDivElement>();
    const showSearchRef = useRef<boolean>();

    useEffect(() => {
        showSearchRef.current = showSearch
        if (showSearch && inputRef) {
            inputRef.current.focus();
        }
    }, [showSearch]);

    useEffect(() => {
        window.addEventListener('click', (e: MouseEvent) => {
            const isClickInsideElement = containerRef?.current?.contains(e.target as Node);
            if (isClickInsideElement === false && showSearchRef.current === true) {
                handleShowSearch(false);
            }
        })
        return () => window.removeEventListener('click', () => { })
    }, [])


    const handleChangeInput = useDebouncedCallback(() => {
        getAnimes({
            // 'sort': EAnimesFields.CanonicalTitle,
            'filter[text]': animeText,
            "page[limit]": 20,
            "fields[anime]": onlySomeAnimesFields
        });
    }, 1000);

    return (
        <Container
            className={`${!showSearch ? 'd-none' : ''}`}
            ref={containerRef}
        >
            <div className='input-wrapper'>
                <input
                    type="text"
                    placeholder='Pesquisar anime'
                    ref={inputRef}
                    onChange={(e) => {
                        setAnimeText(e.target.value);
                        handleChangeInput();
                    }}
                />
                <IconButton
                    onClick={() => handleShowSearch(false)}
                >
                    <AiOutlineClose size={24} color={colors.black} />
                </IconButton>
            </div>
            {isLoadingAnimes || handleChangeInput.isPending()?
                <Spinner />
                :
                <div className='list-wrapper'>
                    <ul>
                        {
                            animesFounded.map((anime, i) => (
                                <div
                                    key={i}
                                    onClick={() => {
                                        router.push(`/animes/${anime.id}`);
                                        handleShowSearch(false);
                                    }}
                                >
                                    <AnimesList
                                        anime={anime}
                                    />
                                </div>
                            ))
                        }
                    </ul>
                </div>
            }
        </Container>
    );
};

export default InputSearch;
