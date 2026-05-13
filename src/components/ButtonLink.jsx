import { ChevronRight, Globe } from "lucide-react";

const returnSVGComponent = (svgString) => {
    return <div className='w-6 h-6' dangerouslySetInnerHTML={{ __html: svgString }} />;
};

const ButtonLink = ({ data }) => {
  return (
    <div
        className="social-button border bg-mesh border-gray-100 rounded-2xl p-4 w-full text-left text-slate-700 font-medium relative flex items-center justify-between hover:border-[#B591B2]/40 transition-colors duration-200"
    >
        <div className="flex items-center justify-start w-full gap-6">
            {data.icon && <div>
              {typeof data.icon === 'string' ? returnSVGComponent(data.icon) : <data.icon />}
            </div>}
            <span class="font-medium text-slate-700 tracking-wide">{data.name}</span>
        </div>

        <ChevronRight width={16} className="text-gray-500 ml-6" />

        <a href={data.path} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={data.name}/>
    </div>
  )
}

export default ButtonLink;