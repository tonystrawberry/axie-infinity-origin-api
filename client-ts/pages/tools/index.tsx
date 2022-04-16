import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { toolsApi } from "@/api";
import { Tool as ToolType } from "@/types/typescript-axios";
import Tool from "@/components/tool/Tool";
import ToolContainer from "@/components/tool/ToolContainer";

export default function Tools() {
  const [tools, setTools] = useState<ToolType[]>([]);

  useEffect(() => {
    const getApiV1Tools = async () => {
      const response = await toolsApi.getApiV1Tools();
      setTools(response.data);
    };

    getApiV1Tools();
  }, []);

  return (
    <div>
      <Banner title="Tools" />
      <div>
        <ToolContainer>
          <>
            {tools.map((tool: ToolType) => (
              <Tool key={tool.id} tool={tool}></Tool>
            ))}
          </>
        </ToolContainer>
      </div>
    </div>
  );
}
