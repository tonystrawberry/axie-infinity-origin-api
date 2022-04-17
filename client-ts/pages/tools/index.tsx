import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { toolsApi } from "@/api";
import { Tool as ToolType } from "@/types/typescript-axios";
import Tool from "@/components/tool/Tool";
import ToolContainer from "@/components/tool/ToolContainer";
import { WithLoading } from "@/components/with-loading/WithLoading";
import Head from "next/head";

export default function Tools() {
  const [tools, setTools] = useState<ToolType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getApiV1Tools = async () => {
      const response = await toolsApi.getApiV1Tools();
      setTools(response.data);
      setIsLoading(false);
    };

    getApiV1Tools();
  }, []);

  const ToolContainerElement = () => (
    <ToolContainer>
      <>
        {tools.map((tool: ToolType) => (
          <Tool key={tool.id} tool={tool}></Tool>
        ))}
      </>
    </ToolContainer>
  );

  const ToolWithLoading = WithLoading(ToolContainerElement);

  return (
    <div>
      <Head>
        <title>AxieDex | Tools</title>
      </Head>
      <Banner title="Tools" />
      <ToolWithLoading isLoading={isLoading}></ToolWithLoading>
    </div>
  );
}
