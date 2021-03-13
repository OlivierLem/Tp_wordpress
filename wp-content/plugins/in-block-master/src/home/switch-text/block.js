import './style.scss'
import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, PlainText, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor
const { URLInputButton } = wp.blockEditor
const { Button, BaseControl, ToggleControl } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/switch-text`

registerBlockType(BLOCK_NAME, {
  title: __('switch text'),
  description: __('switch text and image'),
  icon: 'media-document',
  category: 'common',
  attributes: {
    textColor: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    underTitle: {
      type: 'string'
    },
    textLink:{
      type:'string'
    },
    link: {
      type: 'string'
    },
    imageUrl: {
      type: 'string'
    },
    imageId: {
      type: 'integer'
    },
    switchDisplay: {
      type: 'boolean',
      default: false
    }
  },

  edit: props => {
    const { attributes: { textColor, title, underTitle, textLink,link, imageUrl, imageId, switchDisplay }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return (
    
        <section class="">
            <div class="">
              {imageUrl ? (
                <img src={imageUrl} alt='' />
              ) : (
                <MediaPlaceholder
                  onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
                  allowedTypes={['image']}
                  multiple={false}
                  labels={{ title: 'The Image' }}
                />
              )}
            </div>
            <div class=" "> 
            
                 <PlainText
                  keepplaceholderonfocus='true'
                  placeholder={__('TextColor')}
                  className={className}
                  value={textColor}
                  onChange={(textColor) => {
                    setAttributes({ textColor })
                  }}
                />
                 <PlainText
                  keepplaceholderonfocus='true'
                  placeholder={__('Title')}
                  className={className}
                  value={title}
                  onChange={(title) => {
                    setAttributes({ title })
                  }}
                />
                <PlainText
                  keepplaceholderonfocus='true'
                  placeholder={__('UnderTitle')}
                  className={className}
                  value={underTitle}
                  onChange={(underTitle) => {
                    setAttributes({ underTitle })
                  }}
                />
                <PlainText
                  keepplaceholderonfocus='true'
                  placeholder={__('TextLink')}
                  className={className}
                  value={textLink}
                  onChange={(textLink) => {
                    setAttributes({ textLink })
                  }}
                />
                <URLInputButton
                  className={__('link')}
                  url={link}
                  onChange={link => setAttributes({ link })}
                />
            </div>
            <InspectorControls>
              <BaseControl>
                <MediaUpload
                  onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
                  type='image'
                  value={imageId}
                  className='file'
                  render={({ open }) => (
                    <Button
                      className={!imageUrl && 'button button-large'}
                      onClick={open}
                    >
                      {
                        imageUrl ? (
                          <div className='inspector-controls-flex'>
                            <img className='inspector-controls-flex-img' src={imageUrl} alt='' />
                            <p>{__('Replace image')}</p>
                          </div>
                        ) : (
                          __('Select image')
                        )
                      }
                    </Button>
                  )}
                />
              </BaseControl>
          <BaseControl>
            <ToggleControl
              label={__("Alterner l'image et le texte")}
              checked={switchDisplay}
              onChange={(switchDisplay) => { setAttributes({ switchDisplay }) }}
            />
          </BaseControl>
        </InspectorControls>
          </section>
      
    )
  },

  save: ({ attributes: { textColor, title, underTitle, textLink, link, imageUrl, imageId, switchDisplay } }) => {
   
    const move = switchDisplay ? "switch-reverse" : "switch" 
    return (
     
        <section className={move}>
          <div className="switch__blocText ">
            <p className="switch__blocText-textColor"> {textColor} </p>     
            <h3 className="switch__blocText-title"> {title} </h3>
            <p className="switch__blocText-underTitle"> {underTitle} </p>
            <a className="switch__blocText-link" href={link}> {textLink} </a>
          </div>
        
          <div className="switch__blocImage ">
          {imageUrl &&
            <img src={imageUrl} alt='' />}
          </div>
  
        </section>       
      
    )}
})
