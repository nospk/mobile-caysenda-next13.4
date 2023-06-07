
import ProductService from '@/services/Product.service';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import Setting from '@/components/Setting'
import checkAuthMiddleware from '@/lib/checkAuthMiddleware'
import { Metadata } from 'next';
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
export const dynamic = 'force-dynamic';
async function SettingPage() {
	  return (
		<Setting/>
	  );
}
SettingPage.getInitialProps = () => ({})
export default checkAuthMiddleware(SettingPage)