import { Heading } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import ClickableLogo from './ClickableLogo';

export default function HomePlugins() {
  return (
    <Container>
      <Heading>Supported plugins</Heading>
      <LogoContainer>
        <LogoRow>
          <ClickableLogo
            href="https://github.com/grpc/grpc"
            src="/images/grpc.svg"
            alt="gRpc"
          />
          <ClickableLogo
            href="https://github.com/gin-gonic/gin"
            src="/images/gin.svg"
            alt="Gin"
          />
          <ClickableLogo
            href="https://github.com/labstack/echo"
            src="/images/echo.svg"
            alt="Echo"
          />
          <ClickableLogo
            href="https://github.com/gogf/gf"
            src="/images/goframe.svg"
            alt="GoFrame"
          />
          <ClickableLogo
            href="https://github.com/gofiber/fiber"
            src="/images/fiber.svg"
            alt="Fiber"
          />
          <ClickableLogo
            href="https://github.com/zeromicro/go-zero"
            src="/images/go-zero.svg"
            alt="Zero"
          />
          <ClickableLogo
            href="https://github.com/gorilla/mux"
            src="/images/mux.svg"
            alt="Mux"
          />
        </LogoRow>
        <LogoRow>
          <ClickableLogo
            href="https://www.mysql.com/"
            src="/images/mysql.svg"
            alt="MySql"
          />
          <ClickableLogo
            href="https://www.sqlite.org/index.html"
            src="/images/sqlite.svg"
            alt="SQLite"
          />
          <ClickableLogo
            href="https://www.microsoft.com/en-us/sql-server"
            src="/images/sqlserver.svg"
            alt="SQL Server"
          />
          <ClickableLogo
            href="https://www.postgresql.org/"
            src="/images/postgresql.svg"
            alt="PostgreSQL"
          />
          <ClickableLogo
            href="https://clickhouse.com/"
            src="/images/clickhouse.svg"
            alt="ClickHouse"
          />
          <ClickableLogo
            href="https://www.mongodb.com/"
            src="/images/mongodb.svg"
            alt="MongoDB"
          />
          <ClickableLogo
            href="https://redis.io/"
            src="/images/redis.svg"
            alt="Redis"
          />
        </LogoRow>
        <LogoRow>
          <ClickableLogo
            href="https://aws.amazon.com/"
            src="/images/aws.svg"
            alt="AWS"
          />
          <ClickableLogo
            href="https://intl.cloud.tencent.com/zh/"
            src="/images/tencentcloud.svg"
            alt="Tencent Cloud"
          />
        </LogoRow>
        <LogoRow>
          <ClickableLogo
            href="https://github.com/spf13/viper"
            src="/images/viper.svg"
            alt="Viper"
          />
          <ClickableLogo
            href="https://github.com/uber-go/zap"
            src="/images/zap.svg"
            alt="Zap"
          />
          <ClickableLogo
            href="https://github.com/openssl/openssl"
            src="/images/tls.svg"
            alt="TLS"
          />
        </LogoRow>
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f6f9fc;
  padding: 2rem;
  display: grid;
  width: 100vw;
  text-align: center;
  justify-items: center;
`;

const LogoContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1200px;
`;

const LogoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
`;
