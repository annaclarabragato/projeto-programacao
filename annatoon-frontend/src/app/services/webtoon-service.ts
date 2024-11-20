import { API } from "../@libs/axios";
import {IWebtoon } from "../@libs/types";



const _ENDPOINT = '/webtoons';

const getWebtoons = async (): Promise<IWebtoon[]> => {
    const {data} = await API.get(_ENDPOINT)
    return data;
}

const getWebtoonsById = async (id: string): Promise<IWebtoon> => {
    const {data} = await API.get(`${_ENDPOINT}/${id}`)
    return data;
}

const getByCategoryId = async (id: number): Promise<IWebtoon[]> => {
    const {data} = await API.get(`${_ENDPOINT}?categoryId=${id}`)
    return data;
}

export const WebtoonsService = {
    getWebtoons,
    getWebtoonsById,
    getByCategoryId
}