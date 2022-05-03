import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        
        // filter는 array를 어떤 기준을 만족하는 elements를 다른 배열로 만들어주는 것이다.
        // ex) nums = [1, 2, 3]
        //      const newNums = nums.filter(num => {return num > 1})
        //      newNums === [2, 3]
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (

        /**
         * 안드로이드에서 <View>의 범위는 화면을 밖에까지 영향을 끼친다.
         * 쉽게 말해, IOS 같은 경우에는 <View>과 화면에 딱 맞게 설정이 되지만
         * 만약 View의 Child가 화면 밖을 넘어갈 경우 <View>도 child의 크기에 따라
         * 화면 밖으로 expand 된다. 이는 vertical scrolling이 불가능하게 만들어준다.
         * 
         * 이를 해결하기 위해 flex를 사용하면 된다.
         * 
         * * Empty tag
         * <> </>을 사용하면 rendering 하지 않고 group할 수 있다. 
         */
    <>
        <SearchBar 
            term={ term } 
            onTermChange={ (newTerm) => setTerm(newTerm) }
            onTermSubmit={() => searchApi(term)}
        />
        
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ScrollView>
            <ResultsList 
                title="Cost Effective" 
                results={filterResultsByPrice('$')} />
            <ResultsList 
                title="Bit Pricier" 
                results={filterResultsByPrice('$$')} />
            <ResultsList 
                title="Big Spender" 
                results={filterResultsByPrice('$$$')}/>
        </ScrollView>

    </>);
}

const styles = StyleSheet.create({});

export default SearchScreen;