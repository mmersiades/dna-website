import { pageStyles } from '@/components/styles';
import { Element as ParserElement } from 'domhandler';
import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from 'html-react-parser';

const isElement = (node: DOMNode): node is ParserElement => {
  return node.type === 'tag' || node.type === 'script' || node.type === 'style';
};

const parseHtml = ({ html }: { html: string }) => {
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (isElement(domNode)) {
        const { attribs, tagName, children } = domNode;

        const props = attributesToProps(attribs);

        if (tagName === 'p') {
          return (
            <p
              {...props}
              className={'text-md mb-1'}
            >
              {domToReact(children as DOMNode[], options)}
            </p>
          );
        }

        if (tagName === 'a') {
          const { anchor } = pageStyles;
          return (
            <a
              {...props}
              className={anchor}
            >
              {domToReact(children as DOMNode[], options)}
            </a>
          );
        }

        if (tagName === 'iframe') {
          return (
            <iframe
              {...props}
              className={'aspect-video w-full'}
            >
              {domToReact(children as DOMNode[], options)}
            </iframe>
          );
        }
      }
    },
  };

  return parse(html, options);
};

export default parseHtml;
