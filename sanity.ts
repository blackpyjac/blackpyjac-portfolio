import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import {apiVersion, dataset, projectId} from './sanity/env'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: apiVersion,
    useCdn: process.env.NODE_ENV === "production",
    };

    /* 
     */
export const sanityClient = createClient(config);

export const urlFor = (source: any)=>
    createImageUrlBuilder(config).image(source)