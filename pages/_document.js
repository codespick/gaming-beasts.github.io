import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'
export default function Document(props) {


    // let refreshIcon = () => {
    //     document.body.innerHTML = <div className="spinner-border text-danger" role="status">
    //         <span className="sr-only">Loading...</span>
    //     </div>
    // }
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />

            </Head>

            <link rel='stylesheet' id='structured-content-frontend-css'
                href='https://gamingbeasts.com/wp-content/plugins/structured-content/dist/blocks.style.build.css?ver=1.4.6'
                type='text/css' media='all' />
            <link rel='stylesheet' id='wp-block-library-css'
                href='https://gamingbeasts.com/wp-includes/css/dist/block-library/style.min.css?ver=5.9.2' type='text/css'
                media='all' />


            <link rel='stylesheet' id='mediaelement-css'
                href='https://gamingbeasts.com/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.16'
                type='text/css' media='all' />
            <link rel='stylesheet' id='wp-mediaelement-css'
                href='https://gamingbeasts.com/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=5.9.2' type='text/css'
                media='all' />
            <link rel='stylesheet' id='mpp_gutenberg-css'
                href='https://gamingbeasts.com/wp-content/plugins/metronet-profile-picture/dist/blocks.style.build.css?ver=2.6.0'
                type='text/css' media='all' />


            {/* <link rel='stylesheet' id='mpp_gutenberg-css'
                    href='https://gamingbeasts.com/wp-content/plugins/metronet-profile-picture/dist/blocks.style.build.css?ver=2.6.0'
                    type='text/css' media='all' /> */}



            <link rel='stylesheet' id='contact-form-7-css'
                href='https://gamingbeasts.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.5.6'
                type='text/css' media='all' />
            <link rel='stylesheet' id='penci-oswald-css'
                href='//fonts.googleapis.com/css?family=Oswald%3A400&#038;display=swap&#038;ver=5.9.2' type='text/css'
                media='all' />
            <link rel='stylesheet' id='ez-icomoon-css'
                href='https://gamingbeasts.com/wp-content/plugins/easy-table-of-contents/vendor/icomoon/style.min.css?ver=2.0.17'
                type='text/css' media='all' />
            <link rel='stylesheet' id='ez-toc-css'
                href='https://gamingbeasts.com/wp-content/plugins/easy-table-of-contents/assets/css/screen.min.css?ver=2.0.17'
                type='text/css' media='all' />

            <link rel='stylesheet' id='tie-css-base-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/css/base.min.css?ver=5.4.6' type='text/css'
                media='all' />
            <link rel='stylesheet' id='tie-css-styles-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/css/style.min.css?ver=5.4.6' type='text/css'
                media='all' />
            <link rel='stylesheet' id='tie-css-widgets-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/css/widgets.min.css?ver=5.4.6' type='text/css'
                media='all' />
            <link rel='stylesheet' id='tie-css-helpers-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/css/helpers.min.css?ver=5.4.6' type='text/css'
                media='all' />
            <link rel='stylesheet' id='tie-fontawesome5-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/css/fontawesome.css?ver=5.4.6' type='text/css'
                media='all' />
            <link rel='stylesheet' id='tie-css-single-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/css/single.min.css?ver=5.4.6' type='text/css'
                media='all' />
            <link rel='stylesheet' id='tie-css-print-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/css/print.css?ver=5.4.6' type='text/css'
                media='print' />
            <link rel='stylesheet' id='penci-recipe-css-css'
                href='https://gamingbeasts.com/wp-content/plugins/penci-recipe/css/recipe.css?ver=2.8' type='text/css'
                media='all' />
            <link rel='stylesheet' id='tie-css-style-custom-css'
                href='https://gamingbeasts.com/wp-content/themes/jannah/assets/custom-css/style-custom.css?ver=58045'
                type='text/css' media='all' />


            <script async src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossOrigin="anonymous"  ></script>
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                crossOrigin="anonymous"  ></script>
            <script async src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
                integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
                crossOrigin="anonymous"  ></script>
            <script async src="https://code.jquery.com/jquery-3.6.0.min.js"
                integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"  ></script>
            <body >



                <Main />


                <NextScript />


            </body>
        </Html>
    )
}