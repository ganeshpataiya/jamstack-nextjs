import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "../components/layout/Layout";

//export default function Home({ file, preview }) {
const Home = ({ file, preview }) => {  
  const formOptions = {
    label: 'Home Page',
    fields: [
              { label: 'Title', name: 'title', component: 'text' },
              { label: 'Description', name: 'description', component: 'textarea' },
              { label: 'Price', name: 'price', component: 'number'},
              { label: 'Hero Image',
                name: 'hero_image', 
                component: 'image',
                // Generate the frontmatter value based on the filename
                parse: media => `/static/${media.filename}`,

                // Decide the file upload directory for the post
                uploadDir: () => '/public/static/',

                // Generate the src attribute for the preview image.
                previewSrc: fullSrc => fullSrc.replace('/public', ''),}
            ],
  }

  /*
   ** Register a JSON Tina Form
   */
  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()
  
  const backgroundImage = {
    backgroundImage: 'url(' + data.hero_image + ')',
  }

  return (
    <Layout>
      <section className="wp-block-custom-ge-hero-landing-v1 undefined alignfull" id="ge-heroLanding">
        <div className="mask-top"></div>
          <div className="video_wrapper hide-default">
            <div className="article-media" style={backgroundImage}></div>
              <div className="text-wrapper text-white pl-0">
              <h1>{data.title}</h1>
              <p className="has-medium-font-size">
                <em>{data.description}</em>
              </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
 export const getStaticProps = async function ({ preview, previewData }) {
  const global = await getGlobalStaticProps(preview, previewData)

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "content/home.json",
        parse: parseJson,
      })
    ).props

    return {
      props: {
        ...file,
        ...global,
      },
    }
  }
  // render from the file system.
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
      ...global,
    },
  }
}

export default Home