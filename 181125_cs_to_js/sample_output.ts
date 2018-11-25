﻿import "core-js/es6/promise";
import "core-js/es6/string";
import 'whatwg-fetch'

//import { HttpClient, JsonRpcClient, JsonRpcResponse } from "./vpnrpc_jsonrpc";
import * as VPN from "./vpnrpc";
import UUID from "uuid";

class VpnRpcTest2
{
    IntValue_u32?: number;
    Int64Value_u64?: number;
    StrValue_str?: string;
    UniStrValue_utf?: string;
    DateTime_dt?: Date;
    Data_bin?: Uint8Array;
    Data2_bin?: number[];
}

class Startup
{
    public static async main_test()
    {
        let api: VPN.VpnServerRpc = new VPN.VpnServerRpc();

        let pin: VPN.VpnRpcTest =
        {
            IntValue_u32: 1,
            Int64Value_u64: 2,
        };

        let pin2: VpnRpcTest2 =
        {
        };
        pin2.DateTime_dt = new Date(2018, 11, 19, 1, 2, 3, 4);
        pin2.Data_bin = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
        pin2.Data2_bin = [1, 2, 3, 4, 5, 6, 7, 8];

        console.log("name = " + (<any>pin2.Data2_bin.constructor)["name"]);

        console.log("pout1 = " + VPN.JsonRpcClient.ObjectToJson(pin2));

        console.log("pout2 = " + JSON.stringify(VPN.JsonRpcClient.JsonToObject(VPN.JsonRpcClient.ObjectToJson(pin2)), null, 4));

        let a: any = VPN.JsonRpcClient.JsonToObject(VPN.JsonRpcClient.ObjectToJson([pin2, pin2, pin2, pin2, pin2 ]));

        let hub_list: VPN.VpnRpcEnumHub = await api.EnumHub();

        console.log(hub_list);

        return;

        //let func = api.Test2;

        let pout: VPN.VpnRpcTest = await api.Test(pin);
        //let pout: VpnRpcTest = await func(pin);

        console.log(pout);
    }

    public static main(): number
    {
        /*let msg = "Hello World " + 51;
        console.log(msg);

        let c1 = new C1();
        console.log(c1.a);*/

        Startup.main_test();


        return 0;
    }

}

async function await_test()
{
    console.log("start");

    for (let i = 0; i < 5; i++)
    {
        await test(100);
        //console.log(i);

        console.log(UUID.v4());
    }

    console.log("end");
}

function test(msec: number)
{
    return new Promise(
        function (resolve, reject)
        {
            setTimeout(function ()
            {
                //throw "Hello Error";
                //reject("neko");
                resolve();
            },
                msec);
        }
    );
}


Startup.main();



/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////


let api: VPN.VpnServerRpc = new VPN.VpnServerRpc();
let hub_name = "test";





async function Test_All(): Promise<void>
{
    let b: number;
    let c: number;
    let f: number;
    let a: number = (1 + 2) * 3;
    hub_name = "TEST";
    await Test_Test();
    await Test_GetServerInfo();
    await Test_GetServerStatus();
    let new_listener_port: number = await Test_CreateListener();
    await Test_EnableListener(new_listener_port, false);
    await Test_EnumListener();
    await Test_EnableListener(new_listener_port, true);
    await Test_EnumListener();
    await Test_DeleteListener(new_listener_port);
    await Test_SetServerPassword();
    await Test_GetFarmSetting();
    if (false)
    {
        await Test_SetFarmSetting();
        let farm_members: VPN.VpnRpcEnumFarm = await Test_EnumFarmMember();
        for (let farm_member of farm_members.FarmMemberList!)
        {
            await Test_GetFarmInfo(farm_member.Id_u32);
        }
        await Test_GetFarmConnectionStatus();
    }
    else if (false)
    {
        console.log("abc");
    }
    else
    {
        console.log("def");
    }
    await Test_GetServerCert();
    await Test_SetServerCert();
    await Test_GetServerCipher();
    await Test_SetServerCipher();
    let enum_connection: VPN.VpnRpcEnumConnection = await Test_EnumConnection();
    for (let connecton of enum_connection.ConnectionList!)
    {
        await Test_GetConnectionInfo(connecton.Name_str);
    }
    hub_name = await Test_CreateHub();
    await Test_SetHub();
    await Test_GetHub();
    await Test_EnumHub();
    await Test_SetHubRadius();
    await Test_GetHubRadius();
    await Test_SetHubOnline();
    await Test_GetHubStatus();
    let hub_log_settings: VPN.VpnRpcHubLog = await Test_GetHubLog();
    await Test_SetHubLog(hub_log_settings);
    await Test_AddCa();
    let enum_ca: VPN.VpnRpcHubEnumCA = await Test_EnumCa();
    for (let ca of enum_ca.CAList!)
    {
        await Test_GetCa(ca.Key_u32);
        await Test_DeleteCa(ca.Key_u32);
    }
    await Test_CreateLink();
    await Test_GetLink();
    await Test_SetLink();
    await Test_SetLinkOffline();
    await Test_SetLinkOnline();
    let enum_link: VPN.VpnRpcEnumLink = await Test_EnumLink();
    for (let link of enum_link.LinkList!)
    {
        await Test_GetLinkStatus(link.AccountName_utf);
    }
    await new Promise(r => setTimeout(r, 3000));
    await Test_RenameLink();
    await Test_DeleteLink();
    await Test_AddAccess();
    await Test_EnumAccess();
    await Test_DeleteAccess();
    await Test_SetAccessList();
    await Test_CreateGroup();
    await Test_SetGroup();
    await Test_GetGroup();
    await Test_CreateUser();
    await Test_SetUser();
    await Test_GetUser();
    await Test_EnumUser();
    await Test_EnumGroup();
    await Test_DeleteUser();
    await Test_DeleteGroup();
    let enum_session: VPN.VpnRpcEnumSession = await Test_EnumSession();
    for (let session of enum_session.SessionList!)
    {
        await Test_GetSessionStatus(session.Name_str);
        await Test_DeleteSession(session.Name_str);
    }
    let enum_mac: VPN.VpnRpcEnumMacTable = await Test_EnumMacTable();
    for (let mac of enum_mac.MacTable!)
    {
        await Test_DeleteMacTable(mac.Key_u32);
    }
    let enum_ip: VPN.VpnRpcEnumIpTable = await Test_EnumIpTable();
    for (let ip of enum_ip.IpTable!)
    {
        await Test_DeleteIpTable(ip.Key_u32);
    }
    await Test_SetKeep();
    await Test_GetKeep();
    await Test_EnableSecureNAT();
    await Test_GetSecureNATOption();
    await Test_SetSecureNATOption();
    await Test_EnumNAT();
    await Test_EnumDHCP();
    await Test_GetSecureNATStatus();
    await Test_DisableSecureNAT();
    await Test_EnumEthernet();
    await Test_EnumLocalBridge();
    await Test_GetBridgeSupport();
    await Test_GetCaps();
    await Test_GetConfig();
    await Test_GetDefaultHubAdminOptions();
    await Test_GetHubAdminOptions();
    await Test_SetHubAdminOptions();
    await Test_GetHubExtOptions();
    await Test_SetHubExtOptions();
    await Test_AddL3Switch();
    await Test_AddL3If();
    await Test_EnumL3Switch();
    await Test_EnumL3If();
    await Test_AddL3Table();
    await Test_EnumL3Table();
    await Test_DelL3Table();
    await Test_StartL3Switch();
    await Test_StopL3Switch();
    await Test_DelL3If();
    await Test_DelL3Switch();
    await Test_AddCrl();
    let enum_crl: VPN.VpnRpcEnumCrl = await Test_EnumCrl();
    for (let crl of enum_crl.CRLList!)
    {
        let got_crl: VPN.VpnRpcCrl = await Test_GetCrl(crl.Key_u32);
        got_crl.CommonName_utf = got_crl.CommonName_utf + "_a";
        await Test_SetCrl(got_crl);
    }
    enum_crl = await Test_EnumCrl();
    for (let crl of enum_crl.CRLList!)
    {
        await Test_DelCrl(crl.Key_u32);
    }
    await Test_SetAcList();
    await Test_GetAcList();
    let enum_log_file: VPN.VpnRpcEnumLogFile = await Test_EnumLogFile();
    for (let log of enum_log_file.LogFiles!)
    {
        await Test_ReadLogFile(log.FilePath_str);
        break;
    }
    await Test_SetSysLog(true);
    await Test_GetSysLog();
    await Test_SetSysLog(false);
    await Test_SetHubMsg();
    await Test_GetHubMsg();
    await Test_GetAdminMsg();
    await Test_Flush();
    await Test_SetIPsecServices();
    await Test_GetIPsecServices();
    await Test_AddEtherIpId();
    let enum_etherip_id: VPN.VpnRpcEnumEtherIpId = await Test_EnumEtherIpId();
    for (let etherip_id of enum_etherip_id.Settings!)
    {
        await Test_GetEtherIpId(etherip_id.Id_str);
        await Test_DeleteEtherIpId(etherip_id.Id_str);
    }
    await Test_SetOpenVpnSstpConfig();
    await Test_GetOpenVpnSstpConfig();
    await Test_GetDDnsClientStatus();
    await Test_SetDDnsInternetSettng();
    await Test_GetDDnsInternetSettng();
    await Test_ChangeDDnsClientHostname();
    await Test_RegenerateServerCert();
    await Test_MakeOpenVpnConfigFile();
    await Test_SetSpecialListener();
    await Test_GetSpecialListener();
    await Test_GetAzureStatus();
    await Test_SetAzureStatus();
    await Test_SetVgsConfig();
    await Test_GetVgsConfig();
    await Test_DeleteHub();
    return;
}
async function Test_Test(): Promise<void>
{
    console.log("Begin: Test_Test");
    let a: VPN.VpnRpcTest =
    {
        IntValue_u32: 12345,
    };
    let b: VPN.VpnRpcTest = await api.Test(a);
    console.log(b);
    console.log("End: Test_Test");
    console.log("-----");
    console.log();
}
async function Test_GetServerInfo(): Promise<void>
{
    console.log("Begin: Test_GetServerInfo");
    let info: VPN.VpnRpcServerInfo = await api.GetServerInfo();
    console.log(info);
    console.log("End: Test_GetServerInfo");
    console.log("-----");
    console.log();
}
async function Test_GetServerStatus(): Promise<void>
{
    console.log("Begin: Test_GetServerStatus");
    let out_rpc_server_status: VPN.VpnRpcServerStatus = await api.GetServerStatus();
    console.log(out_rpc_server_status);
    console.log("End: Test_GetServerStatus");
    console.log("-----");
    console.log();
}
async function Test_CreateListener(): Promise<number>
{
    console.log("Begin: Test_CreateListener");
    let port: number = Math.floor((Math.random() * (65534 - 1025)) + 1025);
    console.log("Creating a new listener port: Port " + port);
    let in_rpc_listener: VPN.VpnRpcListener =
    {
        Enable_bool: true,
        Port_u32: port,
    };
    let out_rpc_listener: VPN.VpnRpcListener = await api.CreateListener(in_rpc_listener);
    console.log("Done.");
    console.log("End: Test_CreateListener");
    console.log("-----");
    console.log();
    return port;
}
async function Test_EnumListener(): Promise<void>
{
    console.log("Begin: Test_EnumListener");
    let out_rpc_listener_list: VPN.VpnRpcListenerList = await api.EnumListener();
    console.log(out_rpc_listener_list);
    console.log("End: Test_EnumListener");
    console.log("-----");
    console.log();
}
async function Test_DeleteListener(port?: number): Promise<void>
{
    console.log("Begin: Test_DeleteListener");
    console.log("Deleting a new listener port: Port" + port);
    let in_rpc_listener: VPN.VpnRpcListener =
    {
        Port_u32: port,
    };
    let out_rpc_listener: VPN.VpnRpcListener = await api.DeleteListener(in_rpc_listener);
    console.log("Done.");
    console.log("End: Test_DeleteListener");
    console.log("-----");
    console.log();
}
async function Test_EnableListener(port?: number, enabled?: boolean): Promise<void>
{
    console.log("Begin: Test_EnableListener");
    if (enabled)
    {
        console.log("Enabling listener port = " + port);
    }
    else
    {
        console.log("Disabling listener port = " + port);
    }
    let in_rpc_listener: VPN.VpnRpcListener =
    {
        Port_u32: port,
        Enable_bool: enabled,
    };
    let out_rpc_listener: VPN.VpnRpcListener = await api.EnableListener(in_rpc_listener);
    console.log("Done.");
    console.log("End: Test_EnableListener");
    console.log("-----");
    console.log();
}
async function Test_SetServerPassword(): Promise<void>
{
    let password: string = "microsoft";
    console.log("Begin: Test_SetServerPassword");
    console.log("Set the server administrator password to '" + password + "'.");
    let in_rpc_set_password: VPN.VpnRpcSetPassword =
    {
        PlainTextPassword_str: password,
    };
    let out_rpc_set_password: VPN.VpnRpcSetPassword = await api.SetServerPassword(in_rpc_set_password);
    console.log("Done.");
    console.log("End: Test_SetServerPassword");
    console.log("-----");
    console.log();
}
async function Test_SetFarmSetting(): Promise<void>
{
    console.log("Begin: Test_SetFarmSetting");
    let in_rpc_farm: VPN.VpnRpcFarm =
    {
        ServerType_u32: VPN.VpnRpcServerType.FarmController,
        NumPort_u32: 2,
        Ports_u32: [443, 444, 445,],
        PublicIp_ip: "1.2.3.4",
        ControllerName_str: "controller",
        MemberPasswordPlaintext_str: "microsoft",
        ControllerPort_u32: 443,
        Weight_u32: 100,
        ControllerOnly_bool: false,
    };
    let out_rpc_farm: VPN.VpnRpcFarm = await api.SetFarmSetting(in_rpc_farm);
    console.log("End: Test_SetFarmSetting");
    console.log("-----");
    console.log();
}
async function Test_GetFarmSetting(): Promise<void>
{
    console.log("Begin: Test_GetFarmSetting");
    let out_rpc_farm: VPN.VpnRpcFarm = await api.GetFarmSetting();
    console.log(out_rpc_farm);
    console.log("End: Test_GetFarmSetting");
    console.log("-----");
    console.log();
}
async function Test_GetFarmInfo(id?: number): Promise<void>
{
    console.log("Begin: Test_GetFarmInfo");
    let in_rpc_farm_info: VPN.VpnRpcFarmInfo =
    {
        Id_u32: id,
    };
    let out_rpc_farm_info: VPN.VpnRpcFarmInfo = await api.GetFarmInfo(in_rpc_farm_info);
    console.log(out_rpc_farm_info);
    console.log("End: Test_GetFarmInfo");
    console.log("-----");
    console.log();
}
async function Test_EnumFarmMember(): Promise<VPN.VpnRpcEnumFarm>
{
    console.log("Begin: Test_EnumFarmMember");
    let out_rpc_enum_farm: VPN.VpnRpcEnumFarm = await api.EnumFarmMember();
    console.log(out_rpc_enum_farm);
    console.log("End: Test_EnumFarmMember");
    console.log("-----");
    console.log();
    return out_rpc_enum_farm;
}
async function Test_GetFarmConnectionStatus(): Promise<void>
{
    console.log("Begin: Test_GetFarmConnectionStatus");
    let out_rpc_farm_connection_status: VPN.VpnRpcFarmConnectionStatus = await api.GetFarmConnectionStatus();
    console.log(out_rpc_farm_connection_status);
    console.log("End: Test_GetFarmConnectionStatus");
    console.log("-----");
    console.log();
}
async function Test_SetServerCert(): Promise<void>
{
    console.log("Begin: Test_SetServerCert");
    let in_rpc_key_pair: VPN.VpnRpcKeyPair =
    {
        Cert_bin: new Uint8Array([0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x42, 0x45, 0x47, 0x49, 0x4e, 0x20, 0x43, 0x45, 0x52, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x45, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a, 0x4d, 0x49, 0x49, 0x44, 0x72, 0x6a, 0x43, 0x43, 0x41, 0x70, 0x61, 0x67, 0x41, 0x77, 0x49, 0x42, 0x41, 0x67, 0x49, 0x42, 0x41, 0x44, 0x41, 0x4e, 0x42, 0x67, 0x6b, 0x71, 0x68, 0x6b, 0x69, 0x47, 0x39, 0x77, 0x30, 0x42, 0x41, 0x51, 0x73, 0x46, 0x41, 0x44, 0x42, 0x57, 0x4d, 0x51, 0x77, 0x77, 0x43, 0x67, 0x59, 0x44, 0x56, 0x51, 0x51, 0x44, 0x44, 0x41, 0x4e, 0x68, 0x59, 0x57, 0x45, 0x78, 0x0a, 0x46, 0x54, 0x41, 0x54, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x6f, 0x4d, 0x44, 0x4f, 0x4f, 0x42, 0x72, 0x2b, 0x4f, 0x42, 0x71, 0x75, 0x4f, 0x42, 0x6a, 0x2b, 0x4f, 0x42, 0x6e, 0x54, 0x45, 0x4c, 0x4d, 0x41, 0x6b, 0x47, 0x41, 0x31, 0x55, 0x45, 0x42, 0x68, 0x4d, 0x43, 0x53, 0x6c, 0x41, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x67, 0x4d, 0x42, 0x30, 0x6c, 0x69, 0x0a, 0x59, 0x58, 0x4a, 0x68, 0x61, 0x32, 0x6b, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x63, 0x4d, 0x42, 0x31, 0x52, 0x7a, 0x64, 0x57, 0x74, 0x31, 0x59, 0x6d, 0x45, 0x77, 0x48, 0x68, 0x63, 0x4e, 0x4d, 0x54, 0x67, 0x78, 0x4d, 0x44, 0x45, 0x78, 0x4d, 0x6a, 0x4d, 0x7a, 0x4e, 0x54, 0x41, 0x78, 0x57, 0x68, 0x63, 0x4e, 0x4e, 0x44, 0x49, 0x78, 0x4d, 0x44, 0x41, 0x31, 0x0a, 0x4d, 0x6a, 0x4d, 0x7a, 0x4e, 0x54, 0x41, 0x78, 0x57, 0x6a, 0x42, 0x57, 0x4d, 0x51, 0x77, 0x77, 0x43, 0x67, 0x59, 0x44, 0x56, 0x51, 0x51, 0x44, 0x44, 0x41, 0x4e, 0x68, 0x59, 0x57, 0x45, 0x78, 0x46, 0x54, 0x41, 0x54, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x6f, 0x4d, 0x44, 0x4f, 0x4f, 0x42, 0x72, 0x2b, 0x4f, 0x42, 0x71, 0x75, 0x4f, 0x42, 0x6a, 0x2b, 0x4f, 0x42, 0x6e, 0x54, 0x45, 0x4c, 0x0a, 0x4d, 0x41, 0x6b, 0x47, 0x41, 0x31, 0x55, 0x45, 0x42, 0x68, 0x4d, 0x43, 0x53, 0x6c, 0x41, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x67, 0x4d, 0x42, 0x30, 0x6c, 0x69, 0x59, 0x58, 0x4a, 0x68, 0x61, 0x32, 0x6b, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x63, 0x4d, 0x42, 0x31, 0x52, 0x7a, 0x64, 0x57, 0x74, 0x31, 0x59, 0x6d, 0x45, 0x77, 0x0a, 0x67, 0x67, 0x45, 0x69, 0x4d, 0x41, 0x30, 0x47, 0x43, 0x53, 0x71, 0x47, 0x53, 0x49, 0x62, 0x33, 0x44, 0x51, 0x45, 0x42, 0x41, 0x51, 0x55, 0x41, 0x41, 0x34, 0x49, 0x42, 0x44, 0x77, 0x41, 0x77, 0x67, 0x67, 0x45, 0x4b, 0x41, 0x6f, 0x49, 0x42, 0x41, 0x51, 0x44, 0x58, 0x45, 0x63, 0x76, 0x72, 0x59, 0x37, 0x56, 0x2b, 0x7a, 0x64, 0x42, 0x79, 0x72, 0x64, 0x4e, 0x78, 0x4a, 0x59, 0x45, 0x6d, 0x0a, 0x61, 0x41, 0x4e, 0x59, 0x55, 0x4f, 0x37, 0x76, 0x57, 0x34, 0x68, 0x64, 0x41, 0x35, 0x49, 0x42, 0x49, 0x46, 0x6d, 0x4d, 0x70, 0x6e, 0x62, 0x79, 0x69, 0x4e, 0x6e, 0x5a, 0x77, 0x36, 0x57, 0x39, 0x6f, 0x61, 0x67, 0x78, 0x33, 0x5a, 0x49, 0x65, 0x65, 0x48, 0x56, 0x59, 0x62, 0x52, 0x69, 0x4b, 0x36, 0x41, 0x66, 0x46, 0x74, 0x53, 0x31, 0x32, 0x2b, 0x45, 0x31, 0x4d, 0x59, 0x31, 0x64, 0x32, 0x0a, 0x61, 0x71, 0x51, 0x31, 0x53, 0x72, 0x49, 0x43, 0x39, 0x51, 0x35, 0x55, 0x6e, 0x5a, 0x61, 0x42, 0x72, 0x62, 0x57, 0x32, 0x32, 0x6d, 0x4e, 0x75, 0x6c, 0x4d, 0x34, 0x2f, 0x6c, 0x49, 0x4a, 0x72, 0x48, 0x70, 0x51, 0x55, 0x68, 0x50, 0x78, 0x6f, 0x62, 0x79, 0x34, 0x2f, 0x36, 0x4e, 0x41, 0x37, 0x71, 0x4b, 0x67, 0x55, 0x48, 0x69, 0x79, 0x4f, 0x64, 0x33, 0x4a, 0x42, 0x70, 0x4f, 0x66, 0x77, 0x0a, 0x38, 0x54, 0x76, 0x53, 0x74, 0x51, 0x78, 0x34, 0x4c, 0x38, 0x59, 0x64, 0x4b, 0x51, 0x35, 0x68, 0x74, 0x7a, 0x6b, 0x32, 0x68, 0x70, 0x52, 0x4a, 0x4c, 0x30, 0x6c, 0x4b, 0x67, 0x47, 0x31, 0x57, 0x34, 0x75, 0x4b, 0x32, 0x39, 0x39, 0x42, 0x74, 0x7a, 0x64, 0x41, 0x67, 0x66, 0x42, 0x76, 0x43, 0x54, 0x33, 0x41, 0x31, 0x61, 0x53, 0x70, 0x6a, 0x49, 0x47, 0x74, 0x6e, 0x69, 0x72, 0x49, 0x31, 0x0a, 0x46, 0x4c, 0x52, 0x58, 0x47, 0x79, 0x38, 0x31, 0x31, 0x57, 0x4a, 0x39, 0x4a, 0x68, 0x68, 0x34, 0x41, 0x4b, 0x4c, 0x66, 0x79, 0x56, 0x70, 0x42, 0x4a, 0x67, 0x65, 0x34, 0x73, 0x56, 0x72, 0x36, 0x4e, 0x75, 0x75, 0x49, 0x66, 0x32, 0x71, 0x47, 0x31, 0x6f, 0x79, 0x31, 0x30, 0x70, 0x61, 0x51, 0x4e, 0x65, 0x71, 0x32, 0x33, 0x55, 0x47, 0x61, 0x59, 0x74, 0x2f, 0x7a, 0x55, 0x56, 0x4a, 0x77, 0x0a, 0x55, 0x74, 0x30, 0x57, 0x45, 0x6b, 0x58, 0x38, 0x48, 0x4f, 0x63, 0x62, 0x33, 0x75, 0x49, 0x6f, 0x54, 0x6d, 0x61, 0x4f, 0x34, 0x72, 0x48, 0x42, 0x55, 0x4a, 0x71, 0x45, 0x79, 0x39, 0x51, 0x58, 0x7a, 0x53, 0x57, 0x77, 0x43, 0x35, 0x78, 0x45, 0x43, 0x64, 0x37, 0x43, 0x4a, 0x53, 0x53, 0x68, 0x31, 0x30, 0x4f, 0x75, 0x6e, 0x6c, 0x75, 0x4c, 0x32, 0x4d, 0x47, 0x65, 0x5a, 0x47, 0x6e, 0x76, 0x0a, 0x41, 0x67, 0x4d, 0x42, 0x41, 0x41, 0x47, 0x6a, 0x67, 0x59, 0x59, 0x77, 0x67, 0x59, 0x4d, 0x77, 0x44, 0x77, 0x59, 0x44, 0x56, 0x52, 0x30, 0x54, 0x41, 0x51, 0x48, 0x2f, 0x42, 0x41, 0x55, 0x77, 0x41, 0x77, 0x45, 0x42, 0x2f, 0x7a, 0x41, 0x4c, 0x42, 0x67, 0x4e, 0x56, 0x48, 0x51, 0x38, 0x45, 0x42, 0x41, 0x4d, 0x43, 0x41, 0x66, 0x59, 0x77, 0x59, 0x77, 0x59, 0x44, 0x56, 0x52, 0x30, 0x6c, 0x0a, 0x42, 0x46, 0x77, 0x77, 0x57, 0x67, 0x59, 0x49, 0x4b, 0x77, 0x59, 0x42, 0x42, 0x51, 0x55, 0x48, 0x41, 0x77, 0x45, 0x47, 0x43, 0x43, 0x73, 0x47, 0x41, 0x51, 0x55, 0x46, 0x42, 0x77, 0x4d, 0x43, 0x42, 0x67, 0x67, 0x72, 0x42, 0x67, 0x45, 0x46, 0x42, 0x51, 0x63, 0x44, 0x41, 0x77, 0x59, 0x49, 0x4b, 0x77, 0x59, 0x42, 0x42, 0x51, 0x55, 0x48, 0x41, 0x77, 0x51, 0x47, 0x43, 0x43, 0x73, 0x47, 0x0a, 0x41, 0x51, 0x55, 0x46, 0x42, 0x77, 0x4d, 0x46, 0x42, 0x67, 0x67, 0x72, 0x42, 0x67, 0x45, 0x46, 0x42, 0x51, 0x63, 0x44, 0x42, 0x67, 0x59, 0x49, 0x4b, 0x77, 0x59, 0x42, 0x42, 0x51, 0x55, 0x48, 0x41, 0x77, 0x63, 0x47, 0x43, 0x43, 0x73, 0x47, 0x41, 0x51, 0x55, 0x46, 0x42, 0x77, 0x4d, 0x49, 0x42, 0x67, 0x67, 0x72, 0x42, 0x67, 0x45, 0x46, 0x42, 0x51, 0x63, 0x44, 0x43, 0x54, 0x41, 0x4e, 0x0a, 0x42, 0x67, 0x6b, 0x71, 0x68, 0x6b, 0x69, 0x47, 0x39, 0x77, 0x30, 0x42, 0x41, 0x51, 0x73, 0x46, 0x41, 0x41, 0x4f, 0x43, 0x41, 0x51, 0x45, 0x41, 0x46, 0x6d, 0x34, 0x37, 0x47, 0x55, 0x70, 0x50, 0x57, 0x35, 0x2b, 0x37, 0x69, 0x46, 0x74, 0x69, 0x6c, 0x6f, 0x6b, 0x35, 0x32, 0x49, 0x6f, 0x54, 0x57, 0x72, 0x74, 0x46, 0x67, 0x32, 0x79, 0x69, 0x36, 0x6b, 0x49, 0x32, 0x69, 0x52, 0x4e, 0x51, 0x0a, 0x4b, 0x75, 0x67, 0x48, 0x55, 0x49, 0x4f, 0x34, 0x4b, 0x53, 0x71, 0x4a, 0x56, 0x42, 0x50, 0x38, 0x61, 0x4b, 0x4f, 0x61, 0x54, 0x5a, 0x47, 0x45, 0x31, 0x4b, 0x4d, 0x68, 0x2f, 0x59, 0x6a, 0x68, 0x36, 0x71, 0x2f, 0x67, 0x50, 0x61, 0x6c, 0x67, 0x64, 0x2f, 0x38, 0x44, 0x6d, 0x72, 0x78, 0x53, 0x4a, 0x6d, 0x55, 0x78, 0x33, 0x62, 0x4e, 0x62, 0x38, 0x52, 0x59, 0x36, 0x70, 0x4b, 0x7a, 0x74, 0x0a, 0x5a, 0x64, 0x75, 0x53, 0x61, 0x53, 0x2b, 0x57, 0x55, 0x30, 0x59, 0x74, 0x2b, 0x6c, 0x47, 0x35, 0x76, 0x56, 0x67, 0x61, 0x70, 0x48, 0x45, 0x71, 0x36, 0x79, 0x71, 0x4c, 0x62, 0x65, 0x56, 0x78, 0x51, 0x4c, 0x75, 0x62, 0x54, 0x69, 0x6e, 0x4f, 0x66, 0x56, 0x56, 0x5a, 0x58, 0x79, 0x45, 0x43, 0x59, 0x47, 0x4d, 0x73, 0x59, 0x71, 0x65, 0x6e, 0x4a, 0x6a, 0x4e, 0x63, 0x62, 0x49, 0x5a, 0x4e, 0x0a, 0x79, 0x4d, 0x75, 0x72, 0x46, 0x63, 0x67, 0x30, 0x34, 0x36, 0x4f, 0x34, 0x59, 0x79, 0x68, 0x56, 0x79, 0x71, 0x53, 0x69, 0x74, 0x43, 0x59, 0x37, 0x68, 0x2f, 0x65, 0x71, 0x67, 0x6b, 0x50, 0x4a, 0x51, 0x30, 0x68, 0x6b, 0x70, 0x39, 0x45, 0x64, 0x51, 0x77, 0x62, 0x6e, 0x38, 0x56, 0x6c, 0x66, 0x78, 0x64, 0x42, 0x58, 0x77, 0x51, 0x34, 0x4e, 0x48, 0x4b, 0x30, 0x4a, 0x56, 0x46, 0x2f, 0x33, 0x0a, 0x71, 0x48, 0x61, 0x68, 0x4e, 0x48, 0x4f, 0x35, 0x64, 0x62, 0x4a, 0x5a, 0x57, 0x59, 0x41, 0x62, 0x42, 0x44, 0x70, 0x32, 0x51, 0x45, 0x53, 0x70, 0x76, 0x6f, 0x2b, 0x38, 0x33, 0x6c, 0x68, 0x34, 0x64, 0x6e, 0x58, 0x6a, 0x46, 0x58, 0x4d, 0x43, 0x48, 0x76, 0x52, 0x68, 0x35, 0x31, 0x79, 0x2f, 0x54, 0x71, 0x79, 0x42, 0x34, 0x56, 0x76, 0x72, 0x52, 0x4b, 0x49, 0x4b, 0x74, 0x54, 0x6f, 0x7a, 0x0a, 0x5a, 0x6a, 0x48, 0x59, 0x49, 0x63, 0x62, 0x6a, 0x76, 0x53, 0x58, 0x4d, 0x7a, 0x61, 0x44, 0x50, 0x6a, 0x50, 0x63, 0x5a, 0x47, 0x6a, 0x42, 0x4a, 0x6c, 0x47, 0x36, 0x43, 0x76, 0x44, 0x34, 0x4c, 0x6d, 0x59, 0x7a, 0x72, 0x6b, 0x48, 0x34, 0x31, 0x63, 0x7a, 0x72, 0x34, 0x57, 0x41, 0x3d, 0x3d, 0x0a, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x45, 0x4e, 0x44, 0x20, 0x43, 0x45, 0x52, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x45, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a,]),
        Key_bin: new Uint8Array([0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x42, 0x45, 0x47, 0x49, 0x4e, 0x20, 0x50, 0x52, 0x49, 0x56, 0x41, 0x54, 0x45, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a, 0x4d, 0x49, 0x49, 0x45, 0x76, 0x67, 0x49, 0x42, 0x41, 0x44, 0x41, 0x4e, 0x42, 0x67, 0x6b, 0x71, 0x68, 0x6b, 0x69, 0x47, 0x39, 0x77, 0x30, 0x42, 0x41, 0x51, 0x45, 0x46, 0x41, 0x41, 0x53, 0x43, 0x42, 0x4b, 0x67, 0x77, 0x67, 0x67, 0x53, 0x6b, 0x41, 0x67, 0x45, 0x41, 0x41, 0x6f, 0x49, 0x42, 0x41, 0x51, 0x44, 0x58, 0x45, 0x63, 0x76, 0x72, 0x59, 0x37, 0x56, 0x2b, 0x7a, 0x64, 0x42, 0x79, 0x0a, 0x72, 0x64, 0x4e, 0x78, 0x4a, 0x59, 0x45, 0x6d, 0x61, 0x41, 0x4e, 0x59, 0x55, 0x4f, 0x37, 0x76, 0x57, 0x34, 0x68, 0x64, 0x41, 0x35, 0x49, 0x42, 0x49, 0x46, 0x6d, 0x4d, 0x70, 0x6e, 0x62, 0x79, 0x69, 0x4e, 0x6e, 0x5a, 0x77, 0x36, 0x57, 0x39, 0x6f, 0x61, 0x67, 0x78, 0x33, 0x5a, 0x49, 0x65, 0x65, 0x48, 0x56, 0x59, 0x62, 0x52, 0x69, 0x4b, 0x36, 0x41, 0x66, 0x46, 0x74, 0x53, 0x31, 0x32, 0x0a, 0x2b, 0x45, 0x31, 0x4d, 0x59, 0x31, 0x64, 0x32, 0x61, 0x71, 0x51, 0x31, 0x53, 0x72, 0x49, 0x43, 0x39, 0x51, 0x35, 0x55, 0x6e, 0x5a, 0x61, 0x42, 0x72, 0x62, 0x57, 0x32, 0x32, 0x6d, 0x4e, 0x75, 0x6c, 0x4d, 0x34, 0x2f, 0x6c, 0x49, 0x4a, 0x72, 0x48, 0x70, 0x51, 0x55, 0x68, 0x50, 0x78, 0x6f, 0x62, 0x79, 0x34, 0x2f, 0x36, 0x4e, 0x41, 0x37, 0x71, 0x4b, 0x67, 0x55, 0x48, 0x69, 0x79, 0x4f, 0x0a, 0x64, 0x33, 0x4a, 0x42, 0x70, 0x4f, 0x66, 0x77, 0x38, 0x54, 0x76, 0x53, 0x74, 0x51, 0x78, 0x34, 0x4c, 0x38, 0x59, 0x64, 0x4b, 0x51, 0x35, 0x68, 0x74, 0x7a, 0x6b, 0x32, 0x68, 0x70, 0x52, 0x4a, 0x4c, 0x30, 0x6c, 0x4b, 0x67, 0x47, 0x31, 0x57, 0x34, 0x75, 0x4b, 0x32, 0x39, 0x39, 0x42, 0x74, 0x7a, 0x64, 0x41, 0x67, 0x66, 0x42, 0x76, 0x43, 0x54, 0x33, 0x41, 0x31, 0x61, 0x53, 0x70, 0x6a, 0x0a, 0x49, 0x47, 0x74, 0x6e, 0x69, 0x72, 0x49, 0x31, 0x46, 0x4c, 0x52, 0x58, 0x47, 0x79, 0x38, 0x31, 0x31, 0x57, 0x4a, 0x39, 0x4a, 0x68, 0x68, 0x34, 0x41, 0x4b, 0x4c, 0x66, 0x79, 0x56, 0x70, 0x42, 0x4a, 0x67, 0x65, 0x34, 0x73, 0x56, 0x72, 0x36, 0x4e, 0x75, 0x75, 0x49, 0x66, 0x32, 0x71, 0x47, 0x31, 0x6f, 0x79, 0x31, 0x30, 0x70, 0x61, 0x51, 0x4e, 0x65, 0x71, 0x32, 0x33, 0x55, 0x47, 0x61, 0x0a, 0x59, 0x74, 0x2f, 0x7a, 0x55, 0x56, 0x4a, 0x77, 0x55, 0x74, 0x30, 0x57, 0x45, 0x6b, 0x58, 0x38, 0x48, 0x4f, 0x63, 0x62, 0x33, 0x75, 0x49, 0x6f, 0x54, 0x6d, 0x61, 0x4f, 0x34, 0x72, 0x48, 0x42, 0x55, 0x4a, 0x71, 0x45, 0x79, 0x39, 0x51, 0x58, 0x7a, 0x53, 0x57, 0x77, 0x43, 0x35, 0x78, 0x45, 0x43, 0x64, 0x37, 0x43, 0x4a, 0x53, 0x53, 0x68, 0x31, 0x30, 0x4f, 0x75, 0x6e, 0x6c, 0x75, 0x4c, 0x0a, 0x32, 0x4d, 0x47, 0x65, 0x5a, 0x47, 0x6e, 0x76, 0x41, 0x67, 0x4d, 0x42, 0x41, 0x41, 0x45, 0x43, 0x67, 0x67, 0x45, 0x41, 0x54, 0x77, 0x34, 0x52, 0x6f, 0x52, 0x4c, 0x6a, 0x73, 0x68, 0x72, 0x42, 0x56, 0x6f, 0x59, 0x69, 0x78, 0x4f, 0x4a, 0x2b, 0x57, 0x4c, 0x6d, 0x2f, 0x45, 0x51, 0x57, 0x65, 0x37, 0x6f, 0x6a, 0x38, 0x31, 0x51, 0x50, 0x73, 0x39, 0x56, 0x45, 0x49, 0x32, 0x62, 0x53, 0x4f, 0x0a, 0x34, 0x4a, 0x51, 0x42, 0x55, 0x42, 0x53, 0x6b, 0x70, 0x64, 0x48, 0x34, 0x57, 0x32, 0x77, 0x51, 0x75, 0x2f, 0x61, 0x58, 0x57, 0x38, 0x75, 0x75, 0x53, 0x39, 0x45, 0x43, 0x6d, 0x6d, 0x41, 0x41, 0x75, 0x45, 0x79, 0x4a, 0x54, 0x56, 0x7a, 0x75, 0x31, 0x32, 0x35, 0x58, 0x73, 0x65, 0x63, 0x6c, 0x44, 0x41, 0x55, 0x38, 0x49, 0x55, 0x70, 0x54, 0x2b, 0x70, 0x4c, 0x35, 0x79, 0x70, 0x37, 0x34, 0x0a, 0x45, 0x62, 0x76, 0x4e, 0x48, 0x48, 0x33, 0x67, 0x65, 0x72, 0x4f, 0x67, 0x78, 0x76, 0x49, 0x6a, 0x50, 0x64, 0x67, 0x77, 0x62, 0x66, 0x6d, 0x4d, 0x49, 0x59, 0x48, 0x62, 0x56, 0x70, 0x6e, 0x49, 0x30, 0x77, 0x32, 0x42, 0x43, 0x44, 0x51, 0x76, 0x74, 0x64, 0x64, 0x57, 0x6f, 0x42, 0x74, 0x41, 0x33, 0x43, 0x54, 0x6a, 0x63, 0x2f, 0x43, 0x56, 0x67, 0x73, 0x47, 0x77, 0x33, 0x43, 0x4e, 0x72, 0x0a, 0x46, 0x78, 0x41, 0x46, 0x35, 0x73, 0x4a, 0x34, 0x63, 0x5a, 0x4c, 0x6e, 0x5a, 0x31, 0x45, 0x36, 0x69, 0x74, 0x4c, 0x54, 0x50, 0x69, 0x6f, 0x6a, 0x74, 0x76, 0x48, 0x48, 0x34, 0x61, 0x64, 0x6d, 0x68, 0x68, 0x43, 0x61, 0x42, 0x49, 0x78, 0x76, 0x47, 0x2f, 0x53, 0x6e, 0x59, 0x77, 0x4e, 0x35, 0x38, 0x37, 0x55, 0x5a, 0x6d, 0x37, 0x4c, 0x57, 0x50, 0x61, 0x67, 0x4c, 0x41, 0x33, 0x67, 0x69, 0x0a, 0x48, 0x4b, 0x4f, 0x2b, 0x4b, 0x79, 0x42, 0x51, 0x39, 0x33, 0x31, 0x4e, 0x4d, 0x61, 0x65, 0x6a, 0x36, 0x6d, 0x75, 0x75, 0x46, 0x32, 0x30, 0x32, 0x76, 0x34, 0x37, 0x6c, 0x57, 0x6b, 0x64, 0x50, 0x4f, 0x6e, 0x52, 0x43, 0x69, 0x6f, 0x4d, 0x58, 0x30, 0x63, 0x31, 0x6a, 0x36, 0x76, 0x32, 0x61, 0x59, 0x34, 0x34, 0x77, 0x55, 0x4b, 0x71, 0x39, 0x4d, 0x52, 0x67, 0x6f, 0x52, 0x76, 0x4a, 0x37, 0x0a, 0x41, 0x39, 0x77, 0x65, 0x72, 0x4c, 0x6b, 0x68, 0x35, 0x78, 0x78, 0x35, 0x35, 0x32, 0x4f, 0x74, 0x71, 0x50, 0x36, 0x73, 0x61, 0x6d, 0x75, 0x47, 0x44, 0x52, 0x78, 0x31, 0x42, 0x70, 0x36, 0x53, 0x4f, 0x70, 0x68, 0x43, 0x45, 0x50, 0x48, 0x59, 0x67, 0x51, 0x4b, 0x42, 0x67, 0x51, 0x44, 0x36, 0x33, 0x65, 0x2b, 0x52, 0x75, 0x6c, 0x36, 0x46, 0x78, 0x47, 0x43, 0x76, 0x67, 0x70, 0x6b, 0x33, 0x0a, 0x57, 0x67, 0x2f, 0x54, 0x31, 0x77, 0x2f, 0x59, 0x4b, 0x6b, 0x79, 0x4f, 0x49, 0x46, 0x4c, 0x63, 0x46, 0x4c, 0x57, 0x71, 0x42, 0x44, 0x71, 0x6c, 0x6e, 0x58, 0x65, 0x63, 0x6c, 0x6b, 0x50, 0x4b, 0x6a, 0x57, 0x4e, 0x2f, 0x32, 0x70, 0x4a, 0x6d, 0x4f, 0x31, 0x63, 0x46, 0x63, 0x44, 0x4a, 0x46, 0x59, 0x64, 0x32, 0x45, 0x49, 0x45, 0x72, 0x76, 0x42, 0x57, 0x54, 0x34, 0x51, 0x39, 0x4d, 0x42, 0x0a, 0x4e, 0x35, 0x6c, 0x44, 0x6b, 0x47, 0x75, 0x6a, 0x34, 0x2f, 0x6b, 0x68, 0x56, 0x6c, 0x79, 0x6e, 0x77, 0x62, 0x64, 0x42, 0x6e, 0x47, 0x43, 0x34, 0x61, 0x34, 0x48, 0x4a, 0x49, 0x4a, 0x76, 0x61, 0x35, 0x63, 0x70, 0x49, 0x63, 0x57, 0x65, 0x4a, 0x72, 0x35, 0x61, 0x57, 0x33, 0x69, 0x44, 0x36, 0x68, 0x53, 0x73, 0x61, 0x6c, 0x79, 0x55, 0x76, 0x4a, 0x4d, 0x6d, 0x64, 0x4d, 0x42, 0x6e, 0x47, 0x0a, 0x37, 0x2b, 0x50, 0x65, 0x53, 0x2b, 0x4e, 0x73, 0x4b, 0x30, 0x61, 0x63, 0x31, 0x67, 0x33, 0x4d, 0x6c, 0x56, 0x35, 0x42, 0x41, 0x32, 0x70, 0x55, 0x54, 0x77, 0x4b, 0x42, 0x67, 0x51, 0x44, 0x62, 0x65, 0x46, 0x6d, 0x2b, 0x46, 0x46, 0x35, 0x62, 0x76, 0x6f, 0x4b, 0x7a, 0x49, 0x4c, 0x6c, 0x31, 0x62, 0x79, 0x6b, 0x6c, 0x52, 0x6b, 0x69, 0x76, 0x7a, 0x6b, 0x62, 0x7a, 0x49, 0x6b, 0x41, 0x78, 0x0a, 0x35, 0x56, 0x6b, 0x74, 0x67, 0x36, 0x4a, 0x35, 0x63, 0x76, 0x38, 0x44, 0x35, 0x2b, 0x72, 0x71, 0x50, 0x75, 0x6a, 0x4f, 0x66, 0x39, 0x67, 0x42, 0x6a, 0x4e, 0x37, 0x70, 0x64, 0x78, 0x39, 0x39, 0x35, 0x6b, 0x47, 0x49, 0x78, 0x5a, 0x39, 0x6d, 0x31, 0x68, 0x57, 0x69, 0x78, 0x55, 0x55, 0x31, 0x55, 0x6f, 0x38, 0x72, 0x70, 0x39, 0x4a, 0x69, 0x47, 0x4f, 0x36, 0x72, 0x65, 0x31, 0x77, 0x69, 0x0a, 0x6a, 0x56, 0x2f, 0x4c, 0x31, 0x64, 0x37, 0x55, 0x66, 0x39, 0x48, 0x6a, 0x65, 0x61, 0x70, 0x4f, 0x46, 0x62, 0x34, 0x6b, 0x72, 0x71, 0x52, 0x58, 0x54, 0x65, 0x75, 0x4d, 0x6e, 0x35, 0x35, 0x44, 0x33, 0x64, 0x70, 0x79, 0x6a, 0x51, 0x4e, 0x43, 0x30, 0x5a, 0x50, 0x72, 0x61, 0x6d, 0x58, 0x64, 0x38, 0x31, 0x57, 0x6f, 0x6f, 0x56, 0x77, 0x58, 0x59, 0x41, 0x66, 0x69, 0x46, 0x76, 0x4c, 0x49, 0x0a, 0x6f, 0x66, 0x31, 0x37, 0x51, 0x67, 0x67, 0x49, 0x59, 0x51, 0x4b, 0x42, 0x67, 0x51, 0x44, 0x59, 0x55, 0x67, 0x67, 0x43, 0x34, 0x58, 0x49, 0x67, 0x5a, 0x76, 0x58, 0x34, 0x59, 0x65, 0x55, 0x38, 0x6c, 0x61, 0x79, 0x51, 0x50, 0x79, 0x4b, 0x71, 0x67, 0x38, 0x37, 0x2f, 0x76, 0x31, 0x2b, 0x7a, 0x35, 0x79, 0x65, 0x2f, 0x4d, 0x32, 0x5a, 0x65, 0x36, 0x53, 0x6e, 0x37, 0x48, 0x4a, 0x66, 0x59, 0x0a, 0x55, 0x5a, 0x4d, 0x36, 0x37, 0x48, 0x37, 0x52, 0x4b, 0x4e, 0x6f, 0x68, 0x46, 0x6c, 0x35, 0x43, 0x39, 0x65, 0x44, 0x4e, 0x7a, 0x67, 0x72, 0x50, 0x6b, 0x52, 0x63, 0x2f, 0x2f, 0x54, 0x77, 0x32, 0x45, 0x48, 0x74, 0x59, 0x68, 0x33, 0x42, 0x4b, 0x49, 0x6f, 0x72, 0x77, 0x39, 0x45, 0x64, 0x78, 0x59, 0x4e, 0x6c, 0x6b, 0x2b, 0x6a, 0x4e, 0x73, 0x30, 0x30, 0x64, 0x57, 0x35, 0x34, 0x64, 0x39, 0x0a, 0x65, 0x69, 0x69, 0x7a, 0x7a, 0x78, 0x59, 0x34, 0x34, 0x2f, 0x41, 0x32, 0x70, 0x39, 0x52, 0x49, 0x4d, 0x67, 0x79, 0x35, 0x49, 0x52, 0x77, 0x76, 0x53, 0x73, 0x6d, 0x50, 0x67, 0x61, 0x71, 0x34, 0x6f, 0x4b, 0x4d, 0x64, 0x54, 0x4e, 0x4d, 0x4f, 0x73, 0x30, 0x4a, 0x77, 0x65, 0x79, 0x50, 0x72, 0x42, 0x65, 0x49, 0x41, 0x72, 0x62, 0x46, 0x43, 0x67, 0x51, 0x4b, 0x42, 0x67, 0x51, 0x43, 0x71, 0x0a, 0x57, 0x30, 0x34, 0x56, 0x33, 0x49, 0x75, 0x74, 0x33, 0x55, 0x42, 0x6f, 0x75, 0x50, 0x4d, 0x63, 0x63, 0x38, 0x2f, 0x56, 0x62, 0x69, 0x77, 0x48, 0x77, 0x79, 0x2b, 0x52, 0x6c, 0x4c, 0x6d, 0x4e, 0x77, 0x59, 0x41, 0x71, 0x63, 0x79, 0x35, 0x50, 0x35, 0x58, 0x4b, 0x4c, 0x33, 0x70, 0x36, 0x62, 0x65, 0x33, 0x2b, 0x4d, 0x6f, 0x76, 0x48, 0x52, 0x71, 0x6a, 0x35, 0x78, 0x72, 0x4a, 0x54, 0x57, 0x0a, 0x54, 0x6a, 0x2f, 0x36, 0x59, 0x61, 0x51, 0x73, 0x31, 0x2b, 0x72, 0x74, 0x63, 0x51, 0x45, 0x61, 0x74, 0x64, 0x34, 0x4b, 0x50, 0x66, 0x64, 0x78, 0x53, 0x2f, 0x63, 0x66, 0x52, 0x74, 0x38, 0x71, 0x74, 0x75, 0x42, 0x77, 0x51, 0x61, 0x2f, 0x34, 0x39, 0x4d, 0x72, 0x41, 0x4c, 0x76, 0x57, 0x43, 0x4c, 0x53, 0x42, 0x75, 0x4b, 0x74, 0x33, 0x49, 0x49, 0x75, 0x53, 0x2f, 0x51, 0x44, 0x74, 0x43, 0x0a, 0x5a, 0x4e, 0x67, 0x6d, 0x36, 0x4d, 0x78, 0x71, 0x4e, 0x6e, 0x49, 0x43, 0x58, 0x35, 0x46, 0x34, 0x36, 0x6d, 0x52, 0x49, 0x52, 0x42, 0x42, 0x4f, 0x32, 0x4b, 0x7a, 0x6c, 0x30, 0x33, 0x68, 0x62, 0x51, 0x6c, 0x71, 0x58, 0x4c, 0x5a, 0x63, 0x38, 0x6f, 0x51, 0x4b, 0x42, 0x67, 0x43, 0x53, 0x77, 0x66, 0x46, 0x7a, 0x68, 0x48, 0x76, 0x78, 0x36, 0x68, 0x69, 0x64, 0x57, 0x67, 0x48, 0x4a, 0x63, 0x0a, 0x77, 0x79, 0x76, 0x64, 0x6e, 0x70, 0x58, 0x78, 0x36, 0x5a, 0x4c, 0x6e, 0x6f, 0x61, 0x7a, 0x61, 0x6f, 0x48, 0x47, 0x74, 0x4d, 0x47, 0x43, 0x45, 0x5a, 0x49, 0x50, 0x66, 0x6a, 0x4c, 0x42, 0x63, 0x30, 0x4d, 0x74, 0x79, 0x45, 0x64, 0x53, 0x4c, 0x78, 0x54, 0x6c, 0x35, 0x59, 0x70, 0x78, 0x6f, 0x6d, 0x43, 0x46, 0x55, 0x4d, 0x33, 0x55, 0x63, 0x59, 0x4e, 0x2f, 0x50, 0x5a, 0x66, 0x58, 0x41, 0x0a, 0x6d, 0x36, 0x31, 0x45, 0x6d, 0x71, 0x53, 0x53, 0x4d, 0x56, 0x63, 0x47, 0x50, 0x67, 0x65, 0x2f, 0x43, 0x34, 0x44, 0x42, 0x5a, 0x59, 0x6a, 0x53, 0x45, 0x71, 0x62, 0x67, 0x37, 0x6d, 0x73, 0x52, 0x30, 0x33, 0x37, 0x42, 0x58, 0x54, 0x48, 0x6b, 0x78, 0x44, 0x62, 0x33, 0x71, 0x48, 0x46, 0x54, 0x6f, 0x30, 0x6b, 0x48, 0x57, 0x4a, 0x66, 0x34, 0x39, 0x59, 0x77, 0x32, 0x73, 0x77, 0x6a, 0x54, 0x0a, 0x72, 0x4f, 0x38, 0x46, 0x46, 0x44, 0x52, 0x56, 0x50, 0x44, 0x4c, 0x5a, 0x61, 0x37, 0x36, 0x47, 0x67, 0x79, 0x41, 0x55, 0x4a, 0x38, 0x55, 0x63, 0x0a, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x45, 0x4e, 0x44, 0x20, 0x50, 0x52, 0x49, 0x56, 0x41, 0x54, 0x45, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a,]),
    };
    let out_rpc_key_pair: VPN.VpnRpcKeyPair = await api.SetServerCert(in_rpc_key_pair);
    console.log(out_rpc_key_pair);
    console.log("End: Test_SetServerCert");
    console.log("-----");
    console.log();
}
async function Test_GetServerCert(): Promise<void>
{
    console.log("Begin: Test_GetServerCert");
    let out_rpc_key_pair: VPN.VpnRpcKeyPair = await api.GetServerCert();
    console.log(out_rpc_key_pair);
    console.log("End: Test_GetServerCert");
    console.log("-----");
    console.log();
}
async function Test_GetServerCipher(): Promise<void>
{
    console.log("Begin: Test_GetServerCipher");
    let out_rpc_str: VPN.VpnRpcStr = await api.GetServerCipher();
    console.log(out_rpc_str);
    console.log("End: Test_GetServerCipher");
    console.log("-----");
    console.log();
}
async function Test_SetServerCipher(): Promise<void>
{
    console.log("Begin: Test_SetServerCipher");
    let in_rpc_str: VPN.VpnRpcStr =
    {
        String_str: "RC4-MD5",
    };
    let out_rpc_str: VPN.VpnRpcStr = await api.SetServerCipher(in_rpc_str);
    console.log(out_rpc_str);
    console.log("End: Test_SetServerCipher");
    console.log("-----");
    console.log();
}
async function Test_CreateHub(): Promise<string>
{
    let hub_name: string = "Test_" + Math.floor((Math.random() * (999999 - 100000)) + 100000);
    console.log("Begin: Test_CreateHub");
    let in_rpc_create_hub: VPN.VpnRpcCreateHub =
    {
        HubName_str: hub_name,
        HubType_u32: VPN.VpnRpcHubType.Standalone,
        Online_bool: true,
        AdminPasswordPlainText_str: "microsoft",
    };
    let out_rpc_create_hub: VPN.VpnRpcCreateHub = await api.CreateHub(in_rpc_create_hub);
    console.log(out_rpc_create_hub);
    console.log("End: Test_CreateHub");
    console.log("-----");
    console.log();
    return hub_name;
}
async function Test_SetHub(): Promise<void>
{
    console.log("Begin: Test_SetHub");
    let in_rpc_create_hub: VPN.VpnRpcCreateHub =
    {
        HubName_str: hub_name,
        AdminPasswordPlainText_str: "aho",
        HubType_u32: VPN.VpnRpcHubType.Standalone,
        NoEnum_bool: false,
        MaxSession_u32: 128,
        Online_bool: true,
    };
    let out_rpc_create_hub: VPN.VpnRpcCreateHub = await api.SetHub(in_rpc_create_hub);
    console.log(out_rpc_create_hub);
    console.log("End: Test_SetHub");
    console.log("-----");
    console.log();
}
async function Test_GetHub(): Promise<void>
{
    console.log("Begin: Test_GetHub");
    let in_rpc_create_hub: VPN.VpnRpcCreateHub =
    {
        HubName_str: hub_name,
    };
    let out_rpc_create_hub: VPN.VpnRpcCreateHub = await api.GetHub(in_rpc_create_hub);
    console.log(out_rpc_create_hub);
    console.log("End: Test_GetHub");
    console.log("-----");
    console.log();
}
async function Test_EnumHub(): Promise<void>
{
    console.log("Begin: Test_EnumHub");
    let out_rpc_enum_hub: VPN.VpnRpcEnumHub = await api.EnumHub();
    console.log(out_rpc_enum_hub);
    console.log("End: Test_EnumHub");
    console.log("-----");
    console.log();
}
async function Test_DeleteHub(): Promise<void>
{
    console.log("Begin: Test_DeleteHub");
    let in_rpc_delete_hub: VPN.VpnRpcDeleteHub =
    {
        HubName_str: hub_name,
    };
    let out_rpc_delete_hub: VPN.VpnRpcDeleteHub = await api.DeleteHub(in_rpc_delete_hub);
    console.log(out_rpc_delete_hub);
    console.log("End: Test_DeleteHub");
    console.log("-----");
    console.log();
}
async function Test_GetHubRadius(): Promise<void>
{
    console.log("Begin: Test_GetHubRadius");
    let in_rpc_radius: VPN.VpnRpcRadius =
    {
        HubName_str: hub_name,
    };
    let out_rpc_radius: VPN.VpnRpcRadius = await api.GetHubRadius(in_rpc_radius);
    console.log(out_rpc_radius);
    console.log("End: Test_GetHubRadius");
    console.log("-----");
    console.log();
}
async function Test_SetHubRadius(): Promise<void>
{
    console.log("Begin: Test_SetHubRadius");
    let in_rpc_radius: VPN.VpnRpcRadius =
    {
        HubName_str: hub_name,
        RadiusServerName_str: "1.2.3.4",
        RadiusPort_u32: 1234,
        RadiusSecret_str: "microsoft",
        RadiusRetryInterval_u32: 1000,
    };
    let out_rpc_radius: VPN.VpnRpcRadius = await api.SetHubRadius(in_rpc_radius);
    console.log(out_rpc_radius);
    console.log("End: Test_SetHubRadius");
    console.log("-----");
    console.log();
}
async function Test_EnumConnection(): Promise<VPN.VpnRpcEnumConnection>
{
    console.log("Begin: Test_EnumConnection");
    let out_rpc_enum_connection: VPN.VpnRpcEnumConnection = await api.EnumConnection();
    console.log(out_rpc_enum_connection);
    console.log("End: Test_EnumConnection");
    console.log("-----");
    console.log();
    return out_rpc_enum_connection;
}
async function Test_DisconnectConnection(connection_id?: string): Promise<void>
{
    console.log("Begin: Test_DisconnectConnection");
    let in_rpc_disconnect_connection: VPN.VpnRpcDisconnectConnection =
    {
        Name_str: connection_id,
    };
    let out_rpc_disconnect_connection: VPN.VpnRpcDisconnectConnection = await api.DisconnectConnection(in_rpc_disconnect_connection);
    console.log(out_rpc_disconnect_connection);
    console.log("End: Test_DisconnectConnection");
    console.log("-----");
    console.log();
}
async function Test_GetConnectionInfo(name?: string): Promise<void>
{
    console.log("Begin: Test_GetConnectionInfo");
    let in_rpc_connection_info: VPN.VpnRpcConnectionInfo =
    {
        Name_str: name,
    };
    let out_rpc_connection_info: VPN.VpnRpcConnectionInfo = await api.GetConnectionInfo(in_rpc_connection_info);
    console.log(out_rpc_connection_info);
    console.log("End: Test_GetConnectionInfo");
    console.log("-----");
    console.log();
}
async function Test_SetHubOnline(): Promise<void>
{
    console.log("Begin: Test_SetHubOnline");
    let in_rpc_set_hub_online: VPN.VpnRpcSetHubOnline =
    {
        HubName_str: hub_name,
        Online_bool: true,
    };
    let out_rpc_set_hub_online: VPN.VpnRpcSetHubOnline = await api.SetHubOnline(in_rpc_set_hub_online);
    console.log(out_rpc_set_hub_online);
    console.log("End: Test_SetHubOnline");
    console.log("-----");
    console.log();
}
async function Test_GetHubStatus(): Promise<void>
{
    console.log("Begin: Test_GetHubStatus");
    let in_rpc_hub_status: VPN.VpnRpcHubStatus =
    {
        HubName_str: hub_name,
    };
    let out_rpc_hub_status: VPN.VpnRpcHubStatus = await api.GetHubStatus(in_rpc_hub_status);
    console.log(out_rpc_hub_status);
    console.log("End: Test_GetHubStatus");
    console.log("-----");
    console.log();
}
async function Test_SetHubLog(in_rpc_hub_log?: VPN.VpnRpcHubLog): Promise<void>
{
    console.log("Begin: Test_SetHubLog");
    let out_rpc_hub_log: VPN.VpnRpcHubLog = await api.SetHubLog(in_rpc_hub_log);
    console.log(out_rpc_hub_log);
    console.log("End: Test_SetHubLog");
    console.log("-----");
    console.log();
}
async function Test_GetHubLog(): Promise<VPN.VpnRpcHubLog>
{
    console.log("Begin: Test_GetHubLog");
    let in_rpc_hub_log: VPN.VpnRpcHubLog =
    {
        HubName_str: hub_name,
    };
    let out_rpc_hub_log: VPN.VpnRpcHubLog = await api.GetHubLog(in_rpc_hub_log);
    console.log(out_rpc_hub_log);
    console.log("End: Test_GetHubLog");
    console.log("-----");
    console.log();
    return out_rpc_hub_log;
}
async function Test_AddCa(): Promise<void>
{
    console.log("Begin: Test_AddCa");
    let in_rpc_hub_add_ca: VPN.VpnRpcHubAddCA =
    {
        HubName_str: hub_name,
        Cert_bin: new Uint8Array([0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x42, 0x45, 0x47, 0x49, 0x4e, 0x20, 0x43, 0x45, 0x52, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x45, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a, 0x4d, 0x49, 0x49, 0x44, 0x72, 0x6a, 0x43, 0x43, 0x41, 0x70, 0x61, 0x67, 0x41, 0x77, 0x49, 0x42, 0x41, 0x67, 0x49, 0x42, 0x41, 0x44, 0x41, 0x4e, 0x42, 0x67, 0x6b, 0x71, 0x68, 0x6b, 0x69, 0x47, 0x39, 0x77, 0x30, 0x42, 0x41, 0x51, 0x73, 0x46, 0x41, 0x44, 0x42, 0x57, 0x4d, 0x51, 0x77, 0x77, 0x43, 0x67, 0x59, 0x44, 0x56, 0x51, 0x51, 0x44, 0x44, 0x41, 0x4e, 0x68, 0x59, 0x57, 0x45, 0x78, 0x0a, 0x46, 0x54, 0x41, 0x54, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x6f, 0x4d, 0x44, 0x4f, 0x4f, 0x42, 0x72, 0x2b, 0x4f, 0x42, 0x71, 0x75, 0x4f, 0x42, 0x6a, 0x2b, 0x4f, 0x42, 0x6e, 0x54, 0x45, 0x4c, 0x4d, 0x41, 0x6b, 0x47, 0x41, 0x31, 0x55, 0x45, 0x42, 0x68, 0x4d, 0x43, 0x53, 0x6c, 0x41, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x67, 0x4d, 0x42, 0x30, 0x6c, 0x69, 0x0a, 0x59, 0x58, 0x4a, 0x68, 0x61, 0x32, 0x6b, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x63, 0x4d, 0x42, 0x31, 0x52, 0x7a, 0x64, 0x57, 0x74, 0x31, 0x59, 0x6d, 0x45, 0x77, 0x48, 0x68, 0x63, 0x4e, 0x4d, 0x54, 0x67, 0x78, 0x4d, 0x44, 0x45, 0x78, 0x4d, 0x6a, 0x4d, 0x7a, 0x4e, 0x54, 0x41, 0x78, 0x57, 0x68, 0x63, 0x4e, 0x4e, 0x44, 0x49, 0x78, 0x4d, 0x44, 0x41, 0x31, 0x0a, 0x4d, 0x6a, 0x4d, 0x7a, 0x4e, 0x54, 0x41, 0x78, 0x57, 0x6a, 0x42, 0x57, 0x4d, 0x51, 0x77, 0x77, 0x43, 0x67, 0x59, 0x44, 0x56, 0x51, 0x51, 0x44, 0x44, 0x41, 0x4e, 0x68, 0x59, 0x57, 0x45, 0x78, 0x46, 0x54, 0x41, 0x54, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x6f, 0x4d, 0x44, 0x4f, 0x4f, 0x42, 0x72, 0x2b, 0x4f, 0x42, 0x71, 0x75, 0x4f, 0x42, 0x6a, 0x2b, 0x4f, 0x42, 0x6e, 0x54, 0x45, 0x4c, 0x0a, 0x4d, 0x41, 0x6b, 0x47, 0x41, 0x31, 0x55, 0x45, 0x42, 0x68, 0x4d, 0x43, 0x53, 0x6c, 0x41, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x67, 0x4d, 0x42, 0x30, 0x6c, 0x69, 0x59, 0x58, 0x4a, 0x68, 0x61, 0x32, 0x6b, 0x78, 0x45, 0x44, 0x41, 0x4f, 0x42, 0x67, 0x4e, 0x56, 0x42, 0x41, 0x63, 0x4d, 0x42, 0x31, 0x52, 0x7a, 0x64, 0x57, 0x74, 0x31, 0x59, 0x6d, 0x45, 0x77, 0x0a, 0x67, 0x67, 0x45, 0x69, 0x4d, 0x41, 0x30, 0x47, 0x43, 0x53, 0x71, 0x47, 0x53, 0x49, 0x62, 0x33, 0x44, 0x51, 0x45, 0x42, 0x41, 0x51, 0x55, 0x41, 0x41, 0x34, 0x49, 0x42, 0x44, 0x77, 0x41, 0x77, 0x67, 0x67, 0x45, 0x4b, 0x41, 0x6f, 0x49, 0x42, 0x41, 0x51, 0x44, 0x58, 0x45, 0x63, 0x76, 0x72, 0x59, 0x37, 0x56, 0x2b, 0x7a, 0x64, 0x42, 0x79, 0x72, 0x64, 0x4e, 0x78, 0x4a, 0x59, 0x45, 0x6d, 0x0a, 0x61, 0x41, 0x4e, 0x59, 0x55, 0x4f, 0x37, 0x76, 0x57, 0x34, 0x68, 0x64, 0x41, 0x35, 0x49, 0x42, 0x49, 0x46, 0x6d, 0x4d, 0x70, 0x6e, 0x62, 0x79, 0x69, 0x4e, 0x6e, 0x5a, 0x77, 0x36, 0x57, 0x39, 0x6f, 0x61, 0x67, 0x78, 0x33, 0x5a, 0x49, 0x65, 0x65, 0x48, 0x56, 0x59, 0x62, 0x52, 0x69, 0x4b, 0x36, 0x41, 0x66, 0x46, 0x74, 0x53, 0x31, 0x32, 0x2b, 0x45, 0x31, 0x4d, 0x59, 0x31, 0x64, 0x32, 0x0a, 0x61, 0x71, 0x51, 0x31, 0x53, 0x72, 0x49, 0x43, 0x39, 0x51, 0x35, 0x55, 0x6e, 0x5a, 0x61, 0x42, 0x72, 0x62, 0x57, 0x32, 0x32, 0x6d, 0x4e, 0x75, 0x6c, 0x4d, 0x34, 0x2f, 0x6c, 0x49, 0x4a, 0x72, 0x48, 0x70, 0x51, 0x55, 0x68, 0x50, 0x78, 0x6f, 0x62, 0x79, 0x34, 0x2f, 0x36, 0x4e, 0x41, 0x37, 0x71, 0x4b, 0x67, 0x55, 0x48, 0x69, 0x79, 0x4f, 0x64, 0x33, 0x4a, 0x42, 0x70, 0x4f, 0x66, 0x77, 0x0a, 0x38, 0x54, 0x76, 0x53, 0x74, 0x51, 0x78, 0x34, 0x4c, 0x38, 0x59, 0x64, 0x4b, 0x51, 0x35, 0x68, 0x74, 0x7a, 0x6b, 0x32, 0x68, 0x70, 0x52, 0x4a, 0x4c, 0x30, 0x6c, 0x4b, 0x67, 0x47, 0x31, 0x57, 0x34, 0x75, 0x4b, 0x32, 0x39, 0x39, 0x42, 0x74, 0x7a, 0x64, 0x41, 0x67, 0x66, 0x42, 0x76, 0x43, 0x54, 0x33, 0x41, 0x31, 0x61, 0x53, 0x70, 0x6a, 0x49, 0x47, 0x74, 0x6e, 0x69, 0x72, 0x49, 0x31, 0x0a, 0x46, 0x4c, 0x52, 0x58, 0x47, 0x79, 0x38, 0x31, 0x31, 0x57, 0x4a, 0x39, 0x4a, 0x68, 0x68, 0x34, 0x41, 0x4b, 0x4c, 0x66, 0x79, 0x56, 0x70, 0x42, 0x4a, 0x67, 0x65, 0x34, 0x73, 0x56, 0x72, 0x36, 0x4e, 0x75, 0x75, 0x49, 0x66, 0x32, 0x71, 0x47, 0x31, 0x6f, 0x79, 0x31, 0x30, 0x70, 0x61, 0x51, 0x4e, 0x65, 0x71, 0x32, 0x33, 0x55, 0x47, 0x61, 0x59, 0x74, 0x2f, 0x7a, 0x55, 0x56, 0x4a, 0x77, 0x0a, 0x55, 0x74, 0x30, 0x57, 0x45, 0x6b, 0x58, 0x38, 0x48, 0x4f, 0x63, 0x62, 0x33, 0x75, 0x49, 0x6f, 0x54, 0x6d, 0x61, 0x4f, 0x34, 0x72, 0x48, 0x42, 0x55, 0x4a, 0x71, 0x45, 0x79, 0x39, 0x51, 0x58, 0x7a, 0x53, 0x57, 0x77, 0x43, 0x35, 0x78, 0x45, 0x43, 0x64, 0x37, 0x43, 0x4a, 0x53, 0x53, 0x68, 0x31, 0x30, 0x4f, 0x75, 0x6e, 0x6c, 0x75, 0x4c, 0x32, 0x4d, 0x47, 0x65, 0x5a, 0x47, 0x6e, 0x76, 0x0a, 0x41, 0x67, 0x4d, 0x42, 0x41, 0x41, 0x47, 0x6a, 0x67, 0x59, 0x59, 0x77, 0x67, 0x59, 0x4d, 0x77, 0x44, 0x77, 0x59, 0x44, 0x56, 0x52, 0x30, 0x54, 0x41, 0x51, 0x48, 0x2f, 0x42, 0x41, 0x55, 0x77, 0x41, 0x77, 0x45, 0x42, 0x2f, 0x7a, 0x41, 0x4c, 0x42, 0x67, 0x4e, 0x56, 0x48, 0x51, 0x38, 0x45, 0x42, 0x41, 0x4d, 0x43, 0x41, 0x66, 0x59, 0x77, 0x59, 0x77, 0x59, 0x44, 0x56, 0x52, 0x30, 0x6c, 0x0a, 0x42, 0x46, 0x77, 0x77, 0x57, 0x67, 0x59, 0x49, 0x4b, 0x77, 0x59, 0x42, 0x42, 0x51, 0x55, 0x48, 0x41, 0x77, 0x45, 0x47, 0x43, 0x43, 0x73, 0x47, 0x41, 0x51, 0x55, 0x46, 0x42, 0x77, 0x4d, 0x43, 0x42, 0x67, 0x67, 0x72, 0x42, 0x67, 0x45, 0x46, 0x42, 0x51, 0x63, 0x44, 0x41, 0x77, 0x59, 0x49, 0x4b, 0x77, 0x59, 0x42, 0x42, 0x51, 0x55, 0x48, 0x41, 0x77, 0x51, 0x47, 0x43, 0x43, 0x73, 0x47, 0x0a, 0x41, 0x51, 0x55, 0x46, 0x42, 0x77, 0x4d, 0x46, 0x42, 0x67, 0x67, 0x72, 0x42, 0x67, 0x45, 0x46, 0x42, 0x51, 0x63, 0x44, 0x42, 0x67, 0x59, 0x49, 0x4b, 0x77, 0x59, 0x42, 0x42, 0x51, 0x55, 0x48, 0x41, 0x77, 0x63, 0x47, 0x43, 0x43, 0x73, 0x47, 0x41, 0x51, 0x55, 0x46, 0x42, 0x77, 0x4d, 0x49, 0x42, 0x67, 0x67, 0x72, 0x42, 0x67, 0x45, 0x46, 0x42, 0x51, 0x63, 0x44, 0x43, 0x54, 0x41, 0x4e, 0x0a, 0x42, 0x67, 0x6b, 0x71, 0x68, 0x6b, 0x69, 0x47, 0x39, 0x77, 0x30, 0x42, 0x41, 0x51, 0x73, 0x46, 0x41, 0x41, 0x4f, 0x43, 0x41, 0x51, 0x45, 0x41, 0x46, 0x6d, 0x34, 0x37, 0x47, 0x55, 0x70, 0x50, 0x57, 0x35, 0x2b, 0x37, 0x69, 0x46, 0x74, 0x69, 0x6c, 0x6f, 0x6b, 0x35, 0x32, 0x49, 0x6f, 0x54, 0x57, 0x72, 0x74, 0x46, 0x67, 0x32, 0x79, 0x69, 0x36, 0x6b, 0x49, 0x32, 0x69, 0x52, 0x4e, 0x51, 0x0a, 0x4b, 0x75, 0x67, 0x48, 0x55, 0x49, 0x4f, 0x34, 0x4b, 0x53, 0x71, 0x4a, 0x56, 0x42, 0x50, 0x38, 0x61, 0x4b, 0x4f, 0x61, 0x54, 0x5a, 0x47, 0x45, 0x31, 0x4b, 0x4d, 0x68, 0x2f, 0x59, 0x6a, 0x68, 0x36, 0x71, 0x2f, 0x67, 0x50, 0x61, 0x6c, 0x67, 0x64, 0x2f, 0x38, 0x44, 0x6d, 0x72, 0x78, 0x53, 0x4a, 0x6d, 0x55, 0x78, 0x33, 0x62, 0x4e, 0x62, 0x38, 0x52, 0x59, 0x36, 0x70, 0x4b, 0x7a, 0x74, 0x0a, 0x5a, 0x64, 0x75, 0x53, 0x61, 0x53, 0x2b, 0x57, 0x55, 0x30, 0x59, 0x74, 0x2b, 0x6c, 0x47, 0x35, 0x76, 0x56, 0x67, 0x61, 0x70, 0x48, 0x45, 0x71, 0x36, 0x79, 0x71, 0x4c, 0x62, 0x65, 0x56, 0x78, 0x51, 0x4c, 0x75, 0x62, 0x54, 0x69, 0x6e, 0x4f, 0x66, 0x56, 0x56, 0x5a, 0x58, 0x79, 0x45, 0x43, 0x59, 0x47, 0x4d, 0x73, 0x59, 0x71, 0x65, 0x6e, 0x4a, 0x6a, 0x4e, 0x63, 0x62, 0x49, 0x5a, 0x4e, 0x0a, 0x79, 0x4d, 0x75, 0x72, 0x46, 0x63, 0x67, 0x30, 0x34, 0x36, 0x4f, 0x34, 0x59, 0x79, 0x68, 0x56, 0x79, 0x71, 0x53, 0x69, 0x74, 0x43, 0x59, 0x37, 0x68, 0x2f, 0x65, 0x71, 0x67, 0x6b, 0x50, 0x4a, 0x51, 0x30, 0x68, 0x6b, 0x70, 0x39, 0x45, 0x64, 0x51, 0x77, 0x62, 0x6e, 0x38, 0x56, 0x6c, 0x66, 0x78, 0x64, 0x42, 0x58, 0x77, 0x51, 0x34, 0x4e, 0x48, 0x4b, 0x30, 0x4a, 0x56, 0x46, 0x2f, 0x33, 0x0a, 0x71, 0x48, 0x61, 0x68, 0x4e, 0x48, 0x4f, 0x35, 0x64, 0x62, 0x4a, 0x5a, 0x57, 0x59, 0x41, 0x62, 0x42, 0x44, 0x70, 0x32, 0x51, 0x45, 0x53, 0x70, 0x76, 0x6f, 0x2b, 0x38, 0x33, 0x6c, 0x68, 0x34, 0x64, 0x6e, 0x58, 0x6a, 0x46, 0x58, 0x4d, 0x43, 0x48, 0x76, 0x52, 0x68, 0x35, 0x31, 0x79, 0x2f, 0x54, 0x71, 0x79, 0x42, 0x34, 0x56, 0x76, 0x72, 0x52, 0x4b, 0x49, 0x4b, 0x74, 0x54, 0x6f, 0x7a, 0x0a, 0x5a, 0x6a, 0x48, 0x59, 0x49, 0x63, 0x62, 0x6a, 0x76, 0x53, 0x58, 0x4d, 0x7a, 0x61, 0x44, 0x50, 0x6a, 0x50, 0x63, 0x5a, 0x47, 0x6a, 0x42, 0x4a, 0x6c, 0x47, 0x36, 0x43, 0x76, 0x44, 0x34, 0x4c, 0x6d, 0x59, 0x7a, 0x72, 0x6b, 0x48, 0x34, 0x31, 0x63, 0x7a, 0x72, 0x34, 0x57, 0x41, 0x3d, 0x3d, 0x0a, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x45, 0x4e, 0x44, 0x20, 0x43, 0x45, 0x52, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x45, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a,]),
    };
    let out_rpc_hub_add_ca: VPN.VpnRpcHubAddCA = await api.AddCa(in_rpc_hub_add_ca);
    console.log(out_rpc_hub_add_ca);
    console.log("End: Test_AddCa");
    console.log("-----");
    console.log();
}
async function Test_EnumCa(): Promise<VPN.VpnRpcHubEnumCA>
{
    console.log("Begin: Test_EnumCa");
    let in_rpc_hub_enum_ca: VPN.VpnRpcHubEnumCA =
    {
        HubName_str: hub_name,
    };
    let out_rpc_hub_enum_ca: VPN.VpnRpcHubEnumCA = await api.EnumCa(in_rpc_hub_enum_ca);
    console.log(out_rpc_hub_enum_ca);
    console.log("End: Test_EnumCa");
    console.log("-----");
    console.log();
    return out_rpc_hub_enum_ca;
}
async function Test_GetCa(key?: number): Promise<void>
{
    console.log("Begin: Test_GetCa");
    let in_rpc_hub_get_ca: VPN.VpnRpcHubGetCA =
    {
        HubName_str: hub_name,
        Key_u32: key,
    };
    let out_rpc_hub_get_ca: VPN.VpnRpcHubGetCA = await api.GetCa(in_rpc_hub_get_ca);
    console.log(out_rpc_hub_get_ca);
    console.log("End: Test_GetCa");
    console.log("-----");
    console.log();
}
async function Test_DeleteCa(key?: number): Promise<void>
{
    console.log("Begin: Test_DeleteCa");
    let in_rpc_hub_delete_ca: VPN.VpnRpcHubDeleteCA =
    {
        HubName_str: hub_name,
        Key_u32: key,
    };
    let out_rpc_hub_delete_ca: VPN.VpnRpcHubDeleteCA = await api.DeleteCa(in_rpc_hub_delete_ca);
    console.log(out_rpc_hub_delete_ca);
    console.log("End: Test_DeleteCa");
    console.log("-----");
    console.log();
}
async function Test_SetLinkOnline(): Promise<void>
{
    console.log("Begin: Test_SetLinkOnline");
    let in_rpc_link: VPN.VpnRpcLink =
    {
        HubName_str: hub_name,
        AccountName_utf: "linktest",
    };
    let out_rpc_link: VPN.VpnRpcLink = await api.SetLinkOnline(in_rpc_link);
    console.log(out_rpc_link);
    console.log("End: Test_SetLinkOnline");
    console.log("-----");
    console.log();
}
async function Test_SetLinkOffline(): Promise<void>
{
    console.log("Begin: Test_SetLinkOffline");
    let in_rpc_link: VPN.VpnRpcLink =
    {
        HubName_str: hub_name,
        AccountName_utf: "linktest",
    };
    let out_rpc_link: VPN.VpnRpcLink = await api.SetLinkOffline(in_rpc_link);
    console.log(out_rpc_link);
    console.log("End: Test_SetLinkOffline");
    console.log("-----");
    console.log();
}
async function Test_DeleteLink(): Promise<void>
{
    console.log("Begin: Test_DeleteLink");
    let in_rpc_link: VPN.VpnRpcLink =
    {
        HubName_str: hub_name,
        AccountName_utf: "linktest2",
    };
    let out_rpc_link: VPN.VpnRpcLink = await api.DeleteLink(in_rpc_link);
    console.log(out_rpc_link);
    console.log("End: Test_DeleteLink");
    console.log("-----");
    console.log();
}
async function Test_RenameLink(): Promise<void>
{
    console.log("Begin: Test_RenameLink");
    let in_rpc_rename_link: VPN.VpnRpcRenameLink =
    {
        HubName_str: hub_name,
        OldAccountName_utf: "linktest",
        NewAccountName_utf: "linktest2",
    };
    let out_rpc_rename_link: VPN.VpnRpcRenameLink = await api.RenameLink(in_rpc_rename_link);
    console.log(out_rpc_rename_link);
    console.log("End: Test_RenameLink");
    console.log("-----");
    console.log();
}
async function Test_CreateLink(): Promise<void>
{
    console.log("Begin: Test_CreateLink");
    let in_rpc_create_link: VPN.VpnRpcCreateLink =
    {
        HubName_Ex_str: hub_name,
        CheckServerCert_bool: false,
        ClientOption_AccountName_utf: "linktest",
        ClientOption_Hostname_str: "vpn1.sehosts.com",
        ClientOption_Port_u32: 443,
        ClientOption_ProxyType_u32: 0,
        ClientOption_HubName_str: "SoftEther Network",
        ClientOption_MaxConnection_u32: 16,
        ClientOption_UseEncrypt_bool: true,
        ClientOption_UseCompress_bool: false,
        ClientOption_HalfConnection_bool: true,
        ClientOption_AdditionalConnectionInterval_u32: 2,
        ClientOption_ConnectionDisconnectSpan_u32: 24,
        ClientAuth_AuthType_u32: VPN.VpnRpcClientAuthType.PlainPassword,
        ClientAuth_Username_str: "181012",
        ClientAuth_PlainPassword_str: "microsoft",
        SecPol_DHCPFilter_bool: true,
        SecPol_DHCPNoServer_bool: true,
        SecPol_DHCPForce_bool: true,
        SecPol_CheckMac_bool: true,
        SecPol_CheckIP_bool: true,
        SecPol_ArpDhcpOnly_bool: true,
        SecPol_PrivacyFilter_bool: true,
        SecPol_NoServer_bool: true,
        SecPol_NoBroadcastLimiter_bool: true,
        SecPol_MaxMac_u32: 32,
        SecPol_MaxIP_u32: 64,
        SecPol_MaxUpload_u32: 960000,
        SecPol_MaxDownload_u32: 1280000,
        SecPol_RSandRAFilter_bool: true,
        SecPol_RAFilter_bool: true,
        SecPol_DHCPv6Filter_bool: true,
        SecPol_DHCPv6NoServer_bool: true,
        SecPol_CheckIPv6_bool: true,
        SecPol_NoServerV6_bool: true,
        SecPol_MaxIPv6_u32: 127,
        SecPol_FilterIPv4_bool: true,
        SecPol_FilterIPv6_bool: true,
        SecPol_FilterNonIP_bool: true,
        SecPol_NoIPv6DefaultRouterInRA_bool: true,
        SecPol_VLanId_u32: 123,
    };
    let out_rpc_create_link: VPN.VpnRpcCreateLink = await api.CreateLink(in_rpc_create_link);
    console.log(out_rpc_create_link);
    console.log("End: Test_CreateLink");
    console.log("-----");
    console.log();
}
async function Test_GetLink(): Promise<void>
{
    console.log("Begin: Test_GetLink");
    let in_rpc_create_link: VPN.VpnRpcCreateLink =
    {
        HubName_Ex_str: hub_name,
        ClientOption_AccountName_utf: "linktest",
    };
    let out_rpc_create_link: VPN.VpnRpcCreateLink = await api.GetLink(in_rpc_create_link);
    console.log(out_rpc_create_link);
    console.log("End: Test_GetLink");
    console.log("-----");
    console.log();
}
async function Test_SetLink(): Promise<void>
{
    console.log("Begin: Test_SetLink");
    let in_rpc_create_link: VPN.VpnRpcCreateLink =
    {
        HubName_Ex_str: hub_name,
        CheckServerCert_bool: false,
        ClientOption_AccountName_utf: "linktest",
        ClientOption_Hostname_str: "vpn1.sehosts.com",
        ClientOption_Port_u32: 443,
        ClientOption_ProxyType_u32: 0,
        ClientOption_HubName_str: "SoftEther Network",
        ClientOption_MaxConnection_u32: 16,
        ClientOption_UseEncrypt_bool: true,
        ClientOption_UseCompress_bool: false,
        ClientOption_HalfConnection_bool: true,
        ClientOption_AdditionalConnectionInterval_u32: 2,
        ClientOption_ConnectionDisconnectSpan_u32: 24,
        ClientAuth_AuthType_u32: VPN.VpnRpcClientAuthType.PlainPassword,
        ClientAuth_Username_str: "181012",
        ClientAuth_PlainPassword_str: "microsoft",
        SecPol_DHCPFilter_bool: true,
        SecPol_DHCPNoServer_bool: true,
        SecPol_DHCPForce_bool: true,
        SecPol_CheckMac_bool: true,
        SecPol_CheckIP_bool: true,
        SecPol_ArpDhcpOnly_bool: true,
        SecPol_PrivacyFilter_bool: true,
        SecPol_NoServer_bool: true,
        SecPol_NoBroadcastLimiter_bool: true,
        SecPol_MaxMac_u32: 32,
        SecPol_MaxIP_u32: 64,
        SecPol_MaxUpload_u32: 960000,
        SecPol_MaxDownload_u32: 1280000,
        SecPol_RSandRAFilter_bool: true,
        SecPol_RAFilter_bool: true,
        SecPol_DHCPv6Filter_bool: true,
        SecPol_DHCPv6NoServer_bool: true,
        SecPol_CheckIPv6_bool: true,
        SecPol_NoServerV6_bool: true,
        SecPol_MaxIPv6_u32: 127,
        SecPol_FilterIPv4_bool: true,
        SecPol_FilterIPv6_bool: true,
        SecPol_FilterNonIP_bool: true,
        SecPol_NoIPv6DefaultRouterInRA_bool: true,
        SecPol_VLanId_u32: 123,
    };
    let out_rpc_create_link: VPN.VpnRpcCreateLink = await api.SetLink(in_rpc_create_link);
    console.log(out_rpc_create_link);
    console.log("End: Test_SetLink");
    console.log("-----");
    console.log();
}
async function Test_EnumLink(): Promise<VPN.VpnRpcEnumLink>
{
    console.log("Begin: Test_EnumLink");
    let in_rpc_enum_link: VPN.VpnRpcEnumLink =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_link: VPN.VpnRpcEnumLink = await api.EnumLink(in_rpc_enum_link);
    console.log(out_rpc_enum_link);
    console.log("End: Test_EnumLink");
    console.log("-----");
    console.log();
    return out_rpc_enum_link;
}
async function Test_GetLinkStatus(name?: string): Promise<void>
{
    console.log("Begin: Test_GetLinkStatus");
    let in_rpc_link_status: VPN.VpnRpcLinkStatus =
    {
        HubName_Ex_str: hub_name,
        AccountName_utf: name,
    };
    let out_rpc_link_status: VPN.VpnRpcLinkStatus = await api.GetLinkStatus(in_rpc_link_status);
    console.log(out_rpc_link_status);
    console.log("End: Test_GetLinkStatus");
    console.log("-----");
    console.log();
}
async function Test_AddAccess(): Promise<void>
{
    console.log("Begin: Test_AddAccess");
    let in_rpc_add_access_ipv4: VPN.VpnRpcAddAccess =
    {
        HubName_str: hub_name,
        AccessListSingle: [
            {
                Note_utf: "IPv4 Test",
                Active_bool: true,
                Priority_u32: 100,
                Discard_bool: true,
                IsIPv6_bool: false,
                SrcIpAddress_ip: "192.168.0.0",
                SrcSubnetMask_ip: "255.255.255.0",
                DestIpAddress_ip: "10.0.0.0",
                DestSubnetMask_ip: "255.255.0.0",
                Protocol_u32: VPN.VpnIpProtocolNumber.TCP,
                SrcPortStart_u32: 123,
                SrcPortEnd_u32: 456,
                DestPortStart_u32: 555,
                DestPortEnd_u32: 666,
                SrcUsername_str: "dnobori",
                DestUsername_str: "nekosan",
                CheckSrcMac_bool: true,
                SrcMacAddress_bin: new Uint8Array([1, 2, 3, 0, 0, 0,]),
                SrcMacMask_bin: new Uint8Array([255, 255, 255, 0, 0, 0,]),
                CheckTcpState_bool: true,
                Established_bool: true,
                Delay_u32: 10,
                Jitter_u32: 20,
                Loss_u32: 30,
                RedirectUrl_str: "aho",
            },],
    };
    let out_rpc_add_access_ipv4: VPN.VpnRpcAddAccess = await api.AddAccess(in_rpc_add_access_ipv4);
    let in_rpc_add_access_ipv6: VPN.VpnRpcAddAccess =
    {
        HubName_str: hub_name,
        AccessListSingle: [
            {
                Note_utf: "IPv6 Test",
                Active_bool: true,
                Priority_u32: 100,
                Discard_bool: true,
                IsIPv6_bool: true,
                SrcIpAddress6_bin: new Uint8Array([0x20, 0x01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]),
                SrcSubnetMask6_bin: new Uint8Array([0xff, 0xff, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]),
                Protocol_u32: VPN.VpnIpProtocolNumber.UDP,
                SrcPortStart_u32: 123,
                SrcPortEnd_u32: 456,
                DestPortStart_u32: 555,
                DestPortEnd_u32: 666,
                SrcUsername_str: "dnobori",
                DestUsername_str: "nekosan",
                CheckSrcMac_bool: true,
                SrcMacAddress_bin: new Uint8Array([1, 2, 3, 0, 0, 0,]),
                SrcMacMask_bin: new Uint8Array([255, 255, 255, 0, 0, 0,]),
                CheckTcpState_bool: true,
                Established_bool: true,
                Delay_u32: 10,
                Jitter_u32: 20,
                Loss_u32: 30,
                RedirectUrl_str: "aho",
            },],
    };
    let out_rpc_add_access_ipv6: VPN.VpnRpcAddAccess = await api.AddAccess(in_rpc_add_access_ipv6);
    console.log("End: Test_AddAccess");
    console.log("-----");
    console.log();
}
async function Test_DeleteAccess(): Promise<void>
{
    console.log("Begin: Test_DeleteAccess");
    let in_rpc_delete_access: VPN.VpnRpcDeleteAccess =
    {
        HubName_str: hub_name,
        Id_u32: 1,
    };
    let out_rpc_delete_access: VPN.VpnRpcDeleteAccess = await api.DeleteAccess(in_rpc_delete_access);
    console.log(out_rpc_delete_access);
    console.log("End: Test_DeleteAccess");
    console.log("-----");
    console.log();
}
async function Test_EnumAccess(): Promise<void>
{
    console.log("Begin: Test_EnumAccess");
    let in_rpc_enum_access_list: VPN.VpnRpcEnumAccessList =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_access_list: VPN.VpnRpcEnumAccessList = await api.EnumAccess(in_rpc_enum_access_list);
    console.log(out_rpc_enum_access_list);
    console.log("End: Test_EnumAccess");
    console.log("-----");
    console.log();
}
async function Test_SetAccessList(): Promise<void>
{
    console.log("Begin: Test_SetAccessList");
    let in_rpc_enum_access_list: VPN.VpnRpcEnumAccessList =
    {
        HubName_str: hub_name,
        AccessList: [
            {
                Note_utf: "IPv4 Test 2",
                Active_bool: true,
                Priority_u32: 100,
                Discard_bool: true,
                IsIPv6_bool: false,
                SrcIpAddress_ip: "192.168.0.0",
                SrcSubnetMask_ip: "255.255.255.0",
                DestIpAddress_ip: "10.0.0.0",
                DestSubnetMask_ip: "255.255.0.0",
                Protocol_u32: VPN.VpnIpProtocolNumber.TCP,
                SrcPortStart_u32: 123,
                SrcPortEnd_u32: 456,
                DestPortStart_u32: 555,
                DestPortEnd_u32: 666,
                SrcUsername_str: "dnobori",
                DestUsername_str: "nekosan",
                CheckSrcMac_bool: true,
                SrcMacAddress_bin: new Uint8Array([1, 2, 3, 0, 0, 0,]),
                SrcMacMask_bin: new Uint8Array([255, 255, 255, 0, 0, 0,]),
                CheckTcpState_bool: true,
                Established_bool: true,
                Delay_u32: 10,
                Jitter_u32: 20,
                Loss_u32: 30,
                RedirectUrl_str: "aho",
            },
            {
                Note_utf: "IPv6 Test 2",
                Active_bool: true,
                Priority_u32: 100,
                Discard_bool: true,
                IsIPv6_bool: true,
                SrcIpAddress6_bin: new Uint8Array([0x20, 0x01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]),
                SrcSubnetMask6_bin: new Uint8Array([0xff, 0xff, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]),
                Protocol_u32: VPN.VpnIpProtocolNumber.UDP,
                SrcPortStart_u32: 123,
                SrcPortEnd_u32: 456,
                DestPortStart_u32: 555,
                DestPortEnd_u32: 666,
                SrcUsername_str: "dnobori",
                DestUsername_str: "nekosan",
                CheckSrcMac_bool: true,
                SrcMacAddress_bin: new Uint8Array([1, 2, 3, 0, 0, 0,]),
                SrcMacMask_bin: new Uint8Array([255, 255, 255, 0, 0, 0,]),
                CheckTcpState_bool: true,
                Established_bool: true,
                Delay_u32: 10,
                Jitter_u32: 20,
                Loss_u32: 30,
                RedirectUrl_str: "aho",
            },],
    };
    let out_rpc_enum_access_list: VPN.VpnRpcEnumAccessList = await api.SetAccessList(in_rpc_enum_access_list);
    console.log(out_rpc_enum_access_list);
    console.log("End: Test_SetAccessList");
    console.log("-----");
    console.log();
}
async function Test_CreateUser(): Promise<void>
{
    console.log("Begin: Test_CreateUser");
    let in_rpc_set_user: VPN.VpnRpcSetUser =
    {
        HubName_str: hub_name,
        Name_str: "test1",
        Realname_utf: "ねこさん",
        Note_utf: "こらっ！",
        AuthType_u32: VPN.VpnRpcUserAuthType.Password,
        Auth_Password_str: "microsoft",
        ExpireTime_dt: new Date(2019, 1, 1),
        UsePolicy_bool: true,
        SecPol_Access_bool: true,
        SecPol_DHCPNoServer_bool: true,
        SecPol_MaxMac_u32: 32,
    };
    let out_rpc_set_user: VPN.VpnRpcSetUser = await api.CreateUser(in_rpc_set_user);
    console.log("End: Test_CreateUser");
    console.log("-----");
    console.log();
}
async function Test_SetUser(): Promise<void>
{
    console.log("Begin: Test_SetUser");
    let in_rpc_set_user: VPN.VpnRpcSetUser =
    {
        HubName_str: hub_name,
        Name_str: "test1",
        Realname_utf: "ねこさん",
        Note_utf: "こらっ！",
        GroupName_str: "group1",
        AuthType_u32: VPN.VpnRpcUserAuthType.Anonymous,
        Auth_Password_str: "microsoft",
        ExpireTime_dt: new Date(2019, 1, 1),
        UsePolicy_bool: true,
        SecPol_Access_bool: true,
        SecPol_DHCPNoServer_bool: true,
        SecPol_MaxMac_u32: 16,
    };
    let out_rpc_set_user: VPN.VpnRpcSetUser = await api.SetUser(in_rpc_set_user);
    console.log("End: Test_SetUser");
    console.log("-----");
    console.log();
}
async function Test_GetUser(): Promise<void>
{
    console.log("Begin: Test_GetUser");
    let in_rpc_set_user: VPN.VpnRpcSetUser =
    {
        HubName_str: hub_name,
        Name_str: "test1",
    };
    let out_rpc_set_user: VPN.VpnRpcSetUser = await api.GetUser(in_rpc_set_user);
    console.log(out_rpc_set_user);
    console.log("End: Test_GetUser");
    console.log("-----");
    console.log();
}
async function Test_DeleteUser(): Promise<void>
{
    console.log("Begin: Test_DeleteUser");
    let in_rpc_delete_user: VPN.VpnRpcDeleteUser =
    {
        HubName_str: hub_name,
        Name_str: "test1",
    };
    let out_rpc_delete_user: VPN.VpnRpcDeleteUser = await api.DeleteUser(in_rpc_delete_user);
    console.log("End: Test_DeleteUser");
    console.log("-----");
    console.log();
}
async function Test_EnumUser(): Promise<void>
{
    console.log("Begin: Test_EnumUser");
    let in_rpc_enum_user: VPN.VpnRpcEnumUser =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_user: VPN.VpnRpcEnumUser = await api.EnumUser(in_rpc_enum_user);
    console.log(out_rpc_enum_user);
    console.log("End: Test_EnumUser");
    console.log("-----");
    console.log();
}
async function Test_CreateGroup(): Promise<void>
{
    console.log("Begin: Test_CreateGroup");
    let in_rpc_set_group: VPN.VpnRpcSetGroup =
    {
        HubName_str: hub_name,
        Name_str: "group1",
        Realname_utf: "ねこグループ",
        Note_utf: "これは これは",
    };
    let out_rpc_set_group: VPN.VpnRpcSetGroup = await api.CreateGroup(in_rpc_set_group);
    console.log(out_rpc_set_group);
    console.log("End: Test_CreateGroup");
    console.log("-----");
    console.log();
}
async function Test_SetGroup(): Promise<void>
{
    console.log("Begin: Test_SetGroup");
    let in_rpc_set_group: VPN.VpnRpcSetGroup =
    {
        HubName_str: hub_name,
        Name_str: "group1",
        Realname_utf: "ねこグループ A",
        Note_utf: "これは これは A",
    };
    let out_rpc_set_group: VPN.VpnRpcSetGroup = await api.SetGroup(in_rpc_set_group);
    console.log(out_rpc_set_group);
    console.log("End: Test_SetGroup");
    console.log("-----");
    console.log();
}
async function Test_GetGroup(): Promise<void>
{
    console.log("Begin: Test_GetGroup");
    let in_rpc_set_group: VPN.VpnRpcSetGroup =
    {
        HubName_str: hub_name,
        Name_str: "group1",
    };
    let out_rpc_set_group: VPN.VpnRpcSetGroup = await api.GetGroup(in_rpc_set_group);
    console.log(out_rpc_set_group);
    console.log("End: Test_GetGroup");
    console.log("-----");
    console.log();
}
async function Test_DeleteGroup(): Promise<void>
{
    console.log("Begin: Test_DeleteGroup");
    let in_rpc_delete_user: VPN.VpnRpcDeleteUser =
    {
        HubName_str: hub_name,
        Name_str: "group1",
    };
    let out_rpc_delete_user: VPN.VpnRpcDeleteUser = await api.DeleteGroup(in_rpc_delete_user);
    console.log(out_rpc_delete_user);
    console.log("End: Test_DeleteGroup");
    console.log("-----");
    console.log();
}
async function Test_EnumGroup(): Promise<void>
{
    console.log("Begin: Test_EnumGroup");
    let in_rpc_enum_group: VPN.VpnRpcEnumGroup =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_group: VPN.VpnRpcEnumGroup = await api.EnumGroup(in_rpc_enum_group);
    console.log(out_rpc_enum_group);
    console.log("End: Test_EnumGroup");
    console.log("-----");
    console.log();
}
async function Test_EnumSession(): Promise<VPN.VpnRpcEnumSession>
{
    console.log("Begin: Test_EnumSession");
    let in_rpc_enum_session: VPN.VpnRpcEnumSession =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_session: VPN.VpnRpcEnumSession = await api.EnumSession(in_rpc_enum_session);
    console.log(out_rpc_enum_session);
    console.log("End: Test_EnumSession");
    console.log("-----");
    console.log();
    return out_rpc_enum_session;
}
async function Test_GetSessionStatus(session_name?: string): Promise<void>
{
    console.log("Begin: Test_GetSessionStatus");
    let in_rpc_session_status: VPN.VpnRpcSessionStatus =
    {
        HubName_str: hub_name,
        Name_str: session_name,
    };
    let out_rpc_session_status: VPN.VpnRpcSessionStatus = await api.GetSessionStatus(in_rpc_session_status);
    console.log(out_rpc_session_status);
    console.log("End: Test_GetSessionStatus");
    console.log("-----");
    console.log();
}
async function Test_DeleteSession(session_id?: string): Promise<void>
{
    console.log("Begin: Test_DeleteSession");
    let in_rpc_delete_session: VPN.VpnRpcDeleteSession =
    {
        HubName_str: hub_name,
        Name_str: session_id,
    };
    let out_rpc_delete_session: VPN.VpnRpcDeleteSession = await api.DeleteSession(in_rpc_delete_session);
    console.log(out_rpc_delete_session);
    console.log("End: Test_DeleteSession");
    console.log("-----");
    console.log();
}
async function Test_EnumMacTable(): Promise<VPN.VpnRpcEnumMacTable>
{
    console.log("Begin: Test_EnumMacTable");
    let in_rpc_enum_mac_table: VPN.VpnRpcEnumMacTable =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_mac_table: VPN.VpnRpcEnumMacTable = await api.EnumMacTable(in_rpc_enum_mac_table);
    console.log(out_rpc_enum_mac_table);
    console.log("End: Test_EnumMacTable");
    console.log("-----");
    console.log();
    return out_rpc_enum_mac_table;
}
async function Test_DeleteMacTable(key32?: number): Promise<void>
{
    console.log("Begin: Test_DeleteMacTable");
    let in_rpc_delete_table: VPN.VpnRpcDeleteTable =
    {
        HubName_str: hub_name,
        Key_u32: key32,
    };
    let out_rpc_delete_table: VPN.VpnRpcDeleteTable = await api.DeleteMacTable(in_rpc_delete_table);
    console.log("End: Test_DeleteMacTable");
    console.log("-----");
    console.log();
}
async function Test_EnumIpTable(): Promise<VPN.VpnRpcEnumIpTable>
{
    console.log("Begin: Test_EnumIpTable");
    let in_rpc_enum_ip_table: VPN.VpnRpcEnumIpTable =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_ip_table: VPN.VpnRpcEnumIpTable = await api.EnumIpTable(in_rpc_enum_ip_table);
    console.log(out_rpc_enum_ip_table);
    console.log("End: Test_EnumIpTable");
    console.log("-----");
    console.log();
    return out_rpc_enum_ip_table;
}
async function Test_DeleteIpTable(key32?: number): Promise<void>
{
    console.log("Begin: Test_DeleteIpTable");
    let in_rpc_delete_table: VPN.VpnRpcDeleteTable =
    {
        HubName_str: hub_name,
        Key_u32: key32,
    };
    let out_rpc_delete_table: VPN.VpnRpcDeleteTable = await api.DeleteIpTable(in_rpc_delete_table);
    console.log(out_rpc_delete_table);
    console.log("End: Test_DeleteIpTable");
    console.log("-----");
    console.log();
}
async function Test_SetKeep(): Promise<void>
{
    console.log("Begin: Test_SetKeep");
    let in_rpc_keep: VPN.VpnRpcKeep =
    {
        UseKeepConnect_bool: true,
        KeepConnectHost_str: "www.softether.org",
        KeepConnectPort_u32: 123,
        KeepConnectProtocol_u32: VPN.VpnRpcKeepAliveProtocol.UDP,
        KeepConnectInterval_u32: 1,
    };
    let out_rpc_keep: VPN.VpnRpcKeep = await api.SetKeep(in_rpc_keep);
    console.log(out_rpc_keep);
    console.log("End: Test_SetKeep");
    console.log("-----");
    console.log();
}
async function Test_GetKeep(): Promise<void>
{
    console.log("Begin: Test_GetKeep");
    let in_rpc_keep: VPN.VpnRpcKeep =
    {
    };
    let out_rpc_keep: VPN.VpnRpcKeep = await api.GetKeep(in_rpc_keep);
    console.log(out_rpc_keep);
    console.log("End: Test_GetKeep");
    console.log("-----");
    console.log();
}
async function Test_EnableSecureNAT(): Promise<void>
{
    console.log("Begin: Test_EnableSecureNAT");
    let in_rpc_hub: VPN.VpnRpcHub =
    {
        HubName_str: hub_name,
    };
    let out_rpc_hub: VPN.VpnRpcHub = await api.EnableSecureNAT(in_rpc_hub);
    console.log(out_rpc_hub);
    console.log("End: Test_EnableSecureNAT");
    console.log("-----");
    console.log();
}
async function Test_DisableSecureNAT(): Promise<void>
{
    console.log("Begin: Test_DisableSecureNAT");
    let in_rpc_hub: VPN.VpnRpcHub =
    {
        HubName_str: hub_name,
    };
    let out_rpc_hub: VPN.VpnRpcHub = await api.DisableSecureNAT(in_rpc_hub);
    console.log(out_rpc_hub);
    console.log("End: Test_DisableSecureNAT");
    console.log("-----");
    console.log();
}
async function Test_SetSecureNATOption(): Promise<void>
{
    console.log("Begin: Test_SetSecureNATOption");
    let in_vh_option: VPN.VpnVhOption =
    {
        RpcHubName_str: hub_name,
        MacAddress_bin: new Uint8Array([0x00, 0xAC, 0x00, 0x11, 0x22, 0x33,]),
        Ip_ip: "10.0.0.254",
        Mask_ip: "255.255.255.0",
        UseNat_bool: true,
        Mtu_u32: 1200,
        NatTcpTimeout_u32: 100,
        NatUdpTimeout_u32: 50,
        UseDhcp_bool: true,
        DhcpLeaseIPStart_ip: "10.0.0.101",
        DhcpLeaseIPEnd_ip: "10.0.0.199",
        DhcpSubnetMask_ip: "255.255.255.0",
        DhcpExpireTimeSpan_u32: 3600,
        DhcpGatewayAddress_ip: "10.0.0.254",
        DhcpDnsServerAddress_ip: "10.0.0.254",
        DhcpDnsServerAddress2_ip: "8.8.8.8",
        DhcpDomainName_str: "lab.coe.ad.jp",
        SaveLog_bool: true,
        ApplyDhcpPushRoutes_bool: false,
    };
    let out_vh_option: VPN.VpnVhOption = await api.SetSecureNATOption(in_vh_option);
    console.log(out_vh_option);
    console.log("End: Test_SetSecureNATOption");
    console.log("-----");
    console.log();
}
async function Test_GetSecureNATOption(): Promise<void>
{
    console.log("Begin: Test_GetSecureNATOption");
    let in_vh_option: VPN.VpnVhOption =
    {
        RpcHubName_str: hub_name,
    };
    let out_vh_option: VPN.VpnVhOption = await api.GetSecureNATOption(in_vh_option);
    console.log(out_vh_option);
    console.log("End: Test_GetSecureNATOption");
    console.log("-----");
    console.log();
}
async function Test_EnumNAT(): Promise<void>
{
    console.log("Begin: Test_EnumNAT");
    let in_rpc_enum_nat: VPN.VpnRpcEnumNat =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_nat: VPN.VpnRpcEnumNat = await api.EnumNAT(in_rpc_enum_nat);
    console.log(out_rpc_enum_nat);
    console.log("End: Test_EnumNAT");
    console.log("-----");
    console.log();
}
async function Test_EnumDHCP(): Promise<void>
{
    console.log("Begin: Test_EnumDHCP");
    let in_rpc_enum_dhcp: VPN.VpnRpcEnumDhcp =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_dhcp: VPN.VpnRpcEnumDhcp = await api.EnumDHCP(in_rpc_enum_dhcp);
    console.log(out_rpc_enum_dhcp);
    console.log("End: Test_EnumDHCP");
    console.log("-----");
    console.log();
}
async function Test_GetSecureNATStatus(): Promise<void>
{
    console.log("Begin: Test_GetSecureNATStatus");
    let in_rpc_nat_status: VPN.VpnRpcNatStatus =
    {
        HubName_str: hub_name,
    };
    let out_rpc_nat_status: VPN.VpnRpcNatStatus = await api.GetSecureNATStatus(in_rpc_nat_status);
    console.log(out_rpc_nat_status);
    console.log("End: Test_GetSecureNATStatus");
    console.log("-----");
    console.log();
}
async function Test_EnumEthernet(): Promise<void>
{
    console.log("Begin: Test_EnumEthernet");
    let out_rpc_enum_eth: VPN.VpnRpcEnumEth = await api.EnumEthernet();
    console.log(out_rpc_enum_eth);
    console.log("End: Test_EnumEthernet");
    console.log("-----");
    console.log();
}
async function Test_AddLocalBridge(): Promise<void>
{
    console.log("Begin: Test_AddLocalBridge");
    let in_rpc_localbridge: VPN.VpnRpcLocalBridge =
    {
        DeviceName_str: "Intel(R) Ethernet Connection (2) I219-V (ID=3632031273)",
        HubNameLB_str: hub_name,
    };
    let out_rpc_localbridge: VPN.VpnRpcLocalBridge = await api.AddLocalBridge(in_rpc_localbridge);
    console.log(out_rpc_localbridge);
    console.log("End: Test_AddLocalBridge");
    console.log("-----");
    console.log();
}
async function Test_DeleteLocalBridge(): Promise<void>
{
    console.log("Begin: Test_DeleteLocalBridge");
    let in_rpc_localbridge: VPN.VpnRpcLocalBridge =
    {
        DeviceName_str: "Intel(R) Ethernet Connection (2) I219-V (ID=3632031273)",
        HubNameLB_str: hub_name,
    };
    let out_rpc_localbridge: VPN.VpnRpcLocalBridge = await api.DeleteLocalBridge(in_rpc_localbridge);
    console.log(out_rpc_localbridge);
    console.log("End: Test_DeleteLocalBridge");
    console.log("-----");
    console.log();
}
async function Test_EnumLocalBridge(): Promise<void>
{
    console.log("Begin: Test_EnumLocalBridge");
    let out_rpc_enum_localbridge: VPN.VpnRpcEnumLocalBridge = await api.EnumLocalBridge();
    console.log(out_rpc_enum_localbridge);
    console.log("End: Test_EnumLocalBridge");
    console.log("-----");
    console.log();
}
async function Test_GetBridgeSupport(): Promise<void>
{
    console.log("Begin: Test_GetBridgeSupport");
    let out_rpc_bridge_support: VPN.VpnRpcBridgeSupport = await api.GetBridgeSupport();
    console.log(out_rpc_bridge_support);
    console.log("End: Test_GetBridgeSupport");
    console.log("-----");
    console.log();
}
async function Test_RebootServer(): Promise<void>
{
    console.log("Begin: Test_RebootServer");
    let in_rpc_test: VPN.VpnRpcTest =
    {
    };
    let out_rpc_test: VPN.VpnRpcTest = await api.RebootServer(in_rpc_test);
    console.log(out_rpc_test);
    console.log("End: Test_RebootServer");
    console.log("-----");
    console.log();
}
async function Test_GetCaps(): Promise<void>
{
    console.log("Begin: Test_GetCaps");
    let out_capslist: VPN.VpnCapslist = await api.GetCaps();
    console.log(out_capslist);
    console.log("End: Test_GetCaps");
    console.log("-----");
    console.log();
}
async function Test_GetConfig(): Promise<void>
{
    console.log("Begin: Test_GetConfig");
    let out_rpc_config: VPN.VpnRpcConfig = await api.GetConfig();
    console.log(out_rpc_config);
    console.log("End: Test_GetConfig");
    console.log("-----");
    console.log();
}
async function Test_SetConfig(): Promise<void>
{
    console.log("Begin: Test_SetConfig");
    let in_rpc_config: VPN.VpnRpcConfig =
    {
        FileData_bin: new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x01, 0x02, 0x03, 0x04,]),
    };
    let out_rpc_config: VPN.VpnRpcConfig = await api.SetConfig(in_rpc_config);
    console.log("End: Test_SetConfig");
    console.log("-----");
    console.log();
}
async function Test_GetDefaultHubAdminOptions(): Promise<void>
{
    console.log("Begin: Test_GetDefaultHubAdminOptions");
    let in_rpc_admin_option: VPN.VpnRpcAdminOption =
    {
        HubName_str: hub_name,
    };
    let out_rpc_admin_option: VPN.VpnRpcAdminOption = await api.GetDefaultHubAdminOptions(in_rpc_admin_option);
    console.log(out_rpc_admin_option);
    console.log("End: Test_GetDefaultHubAdminOptions");
    console.log("-----");
    console.log();
}
async function Test_GetHubAdminOptions(): Promise<void>
{
    console.log("Begin: Test_GetHubAdminOptions");
    let in_rpc_admin_option: VPN.VpnRpcAdminOption =
    {
        HubName_str: hub_name,
    };
    let out_rpc_admin_option: VPN.VpnRpcAdminOption = await api.GetHubAdminOptions(in_rpc_admin_option);
    console.log(out_rpc_admin_option);
    console.log("End: Test_GetHubAdminOptions");
    console.log("-----");
    console.log();
}
async function Test_SetHubAdminOptions(): Promise<void>
{
    console.log("Begin: Test_SetHubAdminOptions");
    let in_rpc_admin_option: VPN.VpnRpcAdminOption =
    {
        HubName_str: hub_name,
        AdminOptionList: [
            {
                Name_str: "no_securenat_enablenat",
                Value_u32: 1,
            },],
    };
    let out_rpc_admin_option: VPN.VpnRpcAdminOption = await api.SetHubAdminOptions(in_rpc_admin_option);
    console.log(out_rpc_admin_option);
    console.log("End: Test_SetHubAdminOptions");
    console.log("-----");
    console.log();
}
async function Test_GetHubExtOptions(): Promise<void>
{
    console.log("Begin: Test_GetHubExtOptions");
    let in_rpc_admin_option: VPN.VpnRpcAdminOption =
    {
        HubName_str: hub_name,
    };
    let out_rpc_admin_option: VPN.VpnRpcAdminOption = await api.GetHubExtOptions(in_rpc_admin_option);
    console.log(out_rpc_admin_option);
    console.log("End: Test_GetHubExtOptions");
    console.log("-----");
    console.log();
}
async function Test_SetHubExtOptions(): Promise<void>
{
    console.log("Begin: Test_SetHubExtOptions");
    let in_rpc_admin_option: VPN.VpnRpcAdminOption =
    {
        HubName_str: hub_name,
        AdminOptionList: [
            {
                Name_str: "SecureNAT_RandomizeAssignIp",
                Value_u32: 1,
            },],
    };
    let out_rpc_admin_option: VPN.VpnRpcAdminOption = await api.SetHubExtOptions(in_rpc_admin_option);
    console.log(out_rpc_admin_option);
    console.log("End: Test_SetHubExtOptions");
    console.log("-----");
    console.log();
}
async function Test_AddL3Switch(): Promise<void>
{
    console.log("Begin: Test_AddL3Switch");
    let in_rpc_l3sw: VPN.VpnRpcL3Sw =
    {
        Name_str: "L3SW1",
    };
    let out_rpc_l3sw: VPN.VpnRpcL3Sw = await api.AddL3Switch(in_rpc_l3sw);
    console.log(out_rpc_l3sw);
    console.log("End: Test_AddL3Switch");
    console.log("-----");
    console.log();
}
async function Test_DelL3Switch(): Promise<void>
{
    console.log("Begin: Test_DelL3Switch");
    let in_rpc_l3sw: VPN.VpnRpcL3Sw =
    {
        Name_str: "L3SW1",
    };
    let out_rpc_l3sw: VPN.VpnRpcL3Sw = await api.DelL3Switch(in_rpc_l3sw);
    console.log(out_rpc_l3sw);
    console.log("End: Test_DelL3Switch");
    console.log("-----");
    console.log();
}
async function Test_EnumL3Switch(): Promise<void>
{
    console.log("Begin: Test_EnumL3Switch");
    let out_rpc_enum_l3sw: VPN.VpnRpcEnumL3Sw = await api.EnumL3Switch();
    console.log(out_rpc_enum_l3sw);
    console.log("End: Test_EnumL3Switch");
    console.log("-----");
    console.log();
}
async function Test_StartL3Switch(): Promise<void>
{
    console.log("Begin: Test_StartL3Switch");
    let in_rpc_l3sw: VPN.VpnRpcL3Sw =
    {
        Name_str: "L3SW1",
    };
    let out_rpc_l3sw: VPN.VpnRpcL3Sw = await api.StartL3Switch(in_rpc_l3sw);
    console.log(out_rpc_l3sw);
    console.log("End: Test_StartL3Switch");
    console.log("-----");
    console.log();
}
async function Test_StopL3Switch(): Promise<void>
{
    console.log("Begin: Test_StopL3Switch");
    let in_rpc_l3sw: VPN.VpnRpcL3Sw =
    {
        Name_str: "L3SW1",
    };
    let out_rpc_l3sw: VPN.VpnRpcL3Sw = await api.StopL3Switch(in_rpc_l3sw);
    console.log(out_rpc_l3sw);
    console.log("End: Test_StopL3Switch");
    console.log("-----");
    console.log();
}
async function Test_AddL3If(): Promise<void>
{
    console.log("Begin: Test_AddL3If");
    let in_rpc_l3if: VPN.VpnRpcL3If =
    {
        Name_str: "L3SW1",
        HubName_str: hub_name,
        IpAddress_ip: "192.168.0.1",
        SubnetMask_ip: "255.255.255.0",
    };
    let out_rpc_l3if: VPN.VpnRpcL3If = await api.AddL3If(in_rpc_l3if);
    console.log(out_rpc_l3if);
    console.log("End: Test_AddL3If");
    console.log("-----");
    console.log();
}
async function Test_DelL3If(): Promise<void>
{
    console.log("Begin: Test_DelL3If");
    let in_rpc_l3if: VPN.VpnRpcL3If =
    {
        Name_str: "L3SW1",
        HubName_str: hub_name,
    };
    let out_rpc_l3if: VPN.VpnRpcL3If = await api.DelL3If(in_rpc_l3if);
    console.log(out_rpc_l3if);
    console.log("End: Test_DelL3If");
    console.log("-----");
    console.log();
}
async function Test_EnumL3If(): Promise<void>
{
    console.log("Begin: Test_EnumL3If");
    let in_rpc_enum_l3if: VPN.VpnRpcEnumL3If =
    {
        Name_str: "L3SW1",
    };
    let out_rpc_enum_l3if: VPN.VpnRpcEnumL3If = await api.EnumL3If(in_rpc_enum_l3if);
    console.log(out_rpc_enum_l3if);
    console.log("End: Test_EnumL3If");
    console.log("-----");
    console.log();
}
async function Test_AddL3Table(): Promise<void>
{
    console.log("Begin: Test_AddL3Table");
    let in_rpc_l3table: VPN.VpnRpcL3Table =
    {
        Name_str: "L3SW1",
        NetworkAddress_ip: "10.0.0.0",
        SubnetMask_ip: "255.0.0.0",
        GatewayAddress_ip: "192.168.7.1",
        Metric_u32: 10,
    };
    let out_rpc_l3table: VPN.VpnRpcL3Table = await api.AddL3Table(in_rpc_l3table);
    console.log(out_rpc_l3table);
    console.log("End: Test_AddL3Table");
    console.log("-----");
    console.log();
}
async function Test_DelL3Table(): Promise<void>
{
    console.log("Begin: Test_DelL3Table");
    let in_rpc_l3table: VPN.VpnRpcL3Table =
    {
        Name_str: "L3SW1",
        NetworkAddress_ip: "10.0.0.0",
        SubnetMask_ip: "255.0.0.0",
        GatewayAddress_ip: "192.168.7.1",
        Metric_u32: 10,
    };
    let out_rpc_l3table: VPN.VpnRpcL3Table = await api.DelL3Table(in_rpc_l3table);
    console.log(out_rpc_l3table);
    console.log("End: Test_DelL3Table");
    console.log("-----");
    console.log();
}
async function Test_EnumL3Table(): Promise<void>
{
    console.log("Begin: Test_EnumL3Table");
    let in_rpc_enum_l3table: VPN.VpnRpcEnumL3Table =
    {
        Name_str: "L3SW1",
    };
    let out_rpc_enum_l3table: VPN.VpnRpcEnumL3Table = await api.EnumL3Table(in_rpc_enum_l3table);
    console.log(out_rpc_enum_l3table);
    console.log("End: Test_EnumL3Table");
    console.log("-----");
    console.log();
}
async function Test_EnumCrl(): Promise<VPN.VpnRpcEnumCrl>
{
    console.log("Begin: Test_EnumCrl");
    let in_rpc_enum_crl: VPN.VpnRpcEnumCrl =
    {
        HubName_str: hub_name,
    };
    let out_rpc_enum_crl: VPN.VpnRpcEnumCrl = await api.EnumCrl(in_rpc_enum_crl);
    console.log(out_rpc_enum_crl);
    console.log("End: Test_EnumCrl");
    console.log("-----");
    console.log();
    return out_rpc_enum_crl;
}
async function Test_AddCrl(): Promise<void>
{
    console.log("Begin: Test_AddCrl");
    let in_rpc_crl: VPN.VpnRpcCrl =
    {
        HubName_str: hub_name,
        CommonName_utf: "CN",
        Organization_utf: "Org",
        Unit_utf: "ICSCOE",
        Country_utf: "JP",
        State_utf: "Ibaraki",
        Local_utf: "Tsukuba",
        Serial_bin: new Uint8Array([1, 2, 3, 4, 5,]),
        DigestMD5_bin: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,]),
        DigestSHA1_bin: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,]),
    };
    let out_rpc_crl: VPN.VpnRpcCrl = await api.AddCrl(in_rpc_crl);
    console.log(out_rpc_crl);
    console.log("End: Test_AddCrl");
    console.log("-----");
    console.log();
}
async function Test_DelCrl(key?: number): Promise<void>
{
    console.log("Begin: Test_DelCrl");
    let in_rpc_crl: VPN.VpnRpcCrl =
    {
        HubName_str: hub_name,
        Key_u32: key,
    };
    let out_rpc_crl: VPN.VpnRpcCrl = await api.DelCrl(in_rpc_crl);
    console.log(out_rpc_crl);
    console.log("End: Test_DelCrl");
    console.log("-----");
    console.log();
}
async function Test_GetCrl(key?: number): Promise<VPN.VpnRpcCrl>
{
    console.log("Begin: Test_GetCrl");
    let in_rpc_crl: VPN.VpnRpcCrl =
    {
        HubName_str: hub_name,
        Key_u32: key,
    };
    let out_rpc_crl: VPN.VpnRpcCrl = await api.GetCrl(in_rpc_crl);
    console.log(out_rpc_crl);
    console.log("End: Test_GetCrl");
    console.log("-----");
    console.log();
    return out_rpc_crl;
}
async function Test_SetCrl(crl?: VPN.VpnRpcCrl): Promise<void>
{
    console.log("Begin: Test_SetCrl");
    let out_rpc_crl: VPN.VpnRpcCrl = await api.SetCrl(crl);
    console.log(out_rpc_crl);
    console.log("End: Test_SetCrl");
    console.log("-----");
    console.log();
}
async function Test_SetAcList(): Promise<void>
{
    console.log("Begin: Test_SetAcList");
    let in_rpc_ac_list: VPN.VpnRpcAcList =
    {
        HubName_str: hub_name,
        ACList: [
            {
                Deny_bool: true,
                IpAddress_ip: "192.168.0.0",
                SubnetMask_ip: "255.255.0.0",
                Masked_bool: true,
                Priority_u32: 123,
            },
            {
                Deny_bool: false,
                IpAddress_ip: "fe80::",
                SubnetMask_ip: "8",
                Masked_bool: true,
                Priority_u32: 123,
            },],
    };
    let out_rpc_ac_list: VPN.VpnRpcAcList = await api.SetAcList(in_rpc_ac_list);
    console.log(out_rpc_ac_list);
    console.log("End: Test_SetAcList");
    console.log("-----");
    console.log();
}
async function Test_GetAcList(): Promise<void>
{
    console.log("Begin: Test_GetAcList");
    let in_rpc_ac_list: VPN.VpnRpcAcList =
    {
        HubName_str: hub_name,
    };
    let out_rpc_ac_list: VPN.VpnRpcAcList = await api.GetAcList(in_rpc_ac_list);
    console.log(out_rpc_ac_list);
    console.log("End: Test_GetAcList");
    console.log("-----");
    console.log();
}
async function Test_EnumLogFile(): Promise<VPN.VpnRpcEnumLogFile>
{
    console.log("Begin: Test_EnumLogFile");
    let out_rpc_enum_log_file: VPN.VpnRpcEnumLogFile = await api.EnumLogFile();
    console.log(out_rpc_enum_log_file);
    console.log("End: Test_EnumLogFile");
    console.log("-----");
    console.log();
    return out_rpc_enum_log_file;
}
async function Test_ReadLogFile(filename?: string): Promise<void>
{
    console.log("Begin: Test_ReadLogFile");
    let in_rpc_read_log_file: VPN.VpnRpcReadLogFile =
    {
        FilePath_str: filename,
    };
    let out_rpc_read_log_file: VPN.VpnRpcReadLogFile = await api.ReadLogFile(in_rpc_read_log_file);
    console.log(out_rpc_read_log_file);
    console.log("End: Test_ReadLogFile");
    console.log("-----");
    console.log();
}
async function Test_SetSysLog(flag?: boolean): Promise<void>
{
    console.log("Begin: Test_SetSysLog");
    let in_syslog_setting: VPN.VpnSyslogSetting =
    {
        SaveType_u32: flag ? VPN.VpnSyslogSaveType.ServerAndHubAllLog : VPN.VpnSyslogSaveType.None,
        Hostname_str: "1.2.3.4",
        Port_u32: 123,
    };
    let out_syslog_setting: VPN.VpnSyslogSetting = await api.SetSysLog(in_syslog_setting);
    console.log(out_syslog_setting);
    console.log("End: Test_SetSysLog");
    console.log("-----");
    console.log();
}
async function Test_GetSysLog(): Promise<void>
{
    console.log("Begin: Test_GetSysLog");
    let in_syslog_setting: VPN.VpnSyslogSetting =
    {
    };
    let out_syslog_setting: VPN.VpnSyslogSetting = await api.GetSysLog(in_syslog_setting);
    console.log(out_syslog_setting);
    console.log("End: Test_GetSysLog");
    console.log("-----");
    console.log();
}
async function Test_SetHubMsg(): Promise<void>
{
    console.log("Begin: Test_SetHubMsg");
    let in_rpc_msg: VPN.VpnRpcMsg =
    {
        HubName_str: hub_name,
        Msg_bin: new Uint8Array([0x57, 0x6f, 0x72, 0x6b, 0x69, 0x6e, 0x67, 0x20, 0x4d, 0x65, 0x6e, 0x20, 0x6f, 0x66, 0x20, 0x41, 0x6c, 0x6c, 0x20, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x2c, 0x20, 0x55, 0x6e, 0x69, 0x74, 0x65, 0x21, 0x20, 0xe4, 0xb8, 0x87, 0xe5, 0x9b, 0xbd, 0xe3, 0x81, 0xae, 0xe5, 0x8a, 0xb4, 0xe5, 0x83, 0x8d, 0xe8, 0x80, 0x85, 0xe3, 0x82, 0x88, 0xe3, 0x80, 0x81, 0xe5, 0x9b, 0xa3, 0xe7, 0xb5, 0x90, 0xe3, 0x81, 0x9b, 0xe3, 0x82, 0x88, 0x21, 0x20, 0xd7, 0x92, 0xd7, 0x91, 0xd7, 0xa8, 0xd7, 0x99, 0xd7, 0x9d, 0x20, 0xd7, 0xa2, 0xd7, 0x95, 0xd7, 0x91, 0xd7, 0x93, 0xd7, 0x99, 0xd7, 0x9d, 0x20, 0xd7, 0xa9, 0xd7, 0x9c, 0x20, 0xd7, 0x9b, 0xd7, 0x9c, 0x20, 0xd7, 0x94, 0xd7, 0x9e, 0xd7, 0x93, 0xd7, 0x99, 0xd7, 0xa0, 0xd7, 0x95, 0xd7, 0xaa, 0x2c, 0x20, 0xd7, 0x94, 0xd7, 0xaa, 0xd7, 0x90, 0xd7, 0x97, 0xd7, 0x93, 0xd7, 0x95, 0x21,]),
    };
    let out_rpc_msg: VPN.VpnRpcMsg = await api.SetHubMsg(in_rpc_msg);
    console.log(out_rpc_msg);
    console.log("End: Test_SetHubMsg");
    console.log("-----");
    console.log();
}
async function Test_GetHubMsg(): Promise<void>
{
    console.log("Begin: Test_GetHubMsg");
    let in_rpc_msg: VPN.VpnRpcMsg =
    {
        HubName_str: hub_name,
    };
    let out_rpc_msg: VPN.VpnRpcMsg = await api.GetHubMsg(in_rpc_msg);
    console.log(out_rpc_msg);
    console.log("End: Test_GetHubMsg");
    console.log("-----");
    console.log();
}
async function Test_Crash(): Promise<void>
{
    console.log("Begin: Test_Crash");
    let in_rpc_test: VPN.VpnRpcTest =
    {
    };
    let out_rpc_test: VPN.VpnRpcTest = await api.Crash(in_rpc_test);
    console.log(out_rpc_test);
    console.log("End: Test_Crash");
    console.log("-----");
    console.log();
}
async function Test_GetAdminMsg(): Promise<void>
{
    console.log("Begin: Test_GetAdminMsg");
    let out_rpc_msg: VPN.VpnRpcMsg = await api.GetAdminMsg();
    console.log(out_rpc_msg);
    console.log("End: Test_GetAdminMsg");
    console.log("-----");
    console.log();
}
async function Test_Flush(): Promise<void>
{
    console.log("Begin: Test_Flush");
    let in_rpc_test: VPN.VpnRpcTest =
    {
    };
    let out_rpc_test: VPN.VpnRpcTest = await api.Flush(in_rpc_test);
    console.log(out_rpc_test);
    console.log("End: Test_Flush");
    console.log("-----");
    console.log();
}
async function Test_SetIPsecServices(): Promise<void>
{
    console.log("Begin: Test_SetIPsecServices");
    let in_ipsec_services: VPN.VpnIPsecServices =
    {
        L2TP_Raw_bool: false,
        L2TP_IPsec_bool: false,
        EtherIP_IPsec_bool: false,
        IPsec_Secret_str: "vpn",
    };
    let out_ipsec_services: VPN.VpnIPsecServices = await api.SetIPsecServices(in_ipsec_services);
    console.log(out_ipsec_services);
    console.log("End: Test_SetIPsecServices");
    console.log("-----");
    console.log();
}
async function Test_GetIPsecServices(): Promise<void>
{
    console.log("Begin: Test_GetIPsecServices");
    let out_ipsec_services: VPN.VpnIPsecServices = await api.GetIPsecServices();
    console.log(out_ipsec_services);
    console.log("End: Test_GetIPsecServices");
    console.log("-----");
    console.log();
}
async function Test_AddEtherIpId(): Promise<void>
{
    console.log("Begin: Test_AddEtherIpId");
    let in_etherip_id: VPN.VpnEtherIpId =
    {
        Id_str: "testid",
        HubName_str: hub_name,
        UserName_str: "nekosan",
        Password_str: "torisan",
    };
    let out_etherip_id: VPN.VpnEtherIpId = await api.AddEtherIpId(in_etherip_id);
    console.log(out_etherip_id);
    console.log("End: Test_AddEtherIpId");
    console.log("-----");
    console.log();
}
async function Test_GetEtherIpId(id?: string): Promise<void>
{
    console.log("Begin: Test_GetEtherIpId");
    let in_etherip_id: VPN.VpnEtherIpId =
    {
        Id_str: id,
    };
    let out_etherip_id: VPN.VpnEtherIpId = await api.GetEtherIpId(in_etherip_id);
    console.log(out_etherip_id);
    console.log("End: Test_GetEtherIpId");
    console.log("-----");
    console.log();
}
async function Test_DeleteEtherIpId(id?: string): Promise<void>
{
    console.log("Begin: Test_DeleteEtherIpId");
    let in_etherip_id: VPN.VpnEtherIpId =
    {
        Id_str: id,
    };
    let out_etherip_id: VPN.VpnEtherIpId = await api.DeleteEtherIpId(in_etherip_id);
    console.log(out_etherip_id);
    console.log("End: Test_DeleteEtherIpId");
    console.log("-----");
    console.log();
}
async function Test_EnumEtherIpId(): Promise<VPN.VpnRpcEnumEtherIpId>
{
    console.log("Begin: Test_EnumEtherIpId");
    let out_rpc_enum_etherip_id: VPN.VpnRpcEnumEtherIpId = await api.EnumEtherIpId();
    console.log(out_rpc_enum_etherip_id);
    console.log("End: Test_EnumEtherIpId");
    console.log("-----");
    console.log();
    return out_rpc_enum_etherip_id;
}
async function Test_SetOpenVpnSstpConfig(): Promise<void>
{
    console.log("Begin: Test_SetOpenVpnSstpConfig");
    let in_openvpn_sstp_config: VPN.VpnOpenVpnSstpConfig =
    {
        EnableOpenVPN_bool: true,
        OpenVPNPortList_str: "1 2 3 4 5",
        EnableSSTP_bool: true,
    };
    let out_openvpn_sstp_config: VPN.VpnOpenVpnSstpConfig = await api.SetOpenVpnSstpConfig(in_openvpn_sstp_config);
    console.log(out_openvpn_sstp_config);
    console.log("End: Test_SetOpenVpnSstpConfig");
    console.log("-----");
    console.log();
}
async function Test_GetOpenVpnSstpConfig(): Promise<void>
{
    console.log("Begin: Test_GetOpenVpnSstpConfig");
    let out_openvpn_sstp_config: VPN.VpnOpenVpnSstpConfig = await api.GetOpenVpnSstpConfig();
    console.log(out_openvpn_sstp_config);
    console.log("End: Test_GetOpenVpnSstpConfig");
    console.log("-----");
    console.log();
}
async function Test_GetDDnsClientStatus(): Promise<void>
{
    console.log("Begin: Test_GetDDnsClientStatus");
    let out_ddns_client_status: VPN.VpnDDnsClientStatus = await api.GetDDnsClientStatus();
    console.log(out_ddns_client_status);
    console.log("End: Test_GetDDnsClientStatus");
    console.log("-----");
    console.log();
}
async function Test_ChangeDDnsClientHostname(): Promise<void>
{
    console.log("Begin: Test_ChangeDDnsClientHostname");
    let in_rpc_test: VPN.VpnRpcTest =
    {
        StrValue_str: "nekotest" + Math.floor((Math.random() * (2100000000 - 1000000000)) + 1000000000),
    };
    let out_rpc_test: VPN.VpnRpcTest = await api.ChangeDDnsClientHostname(in_rpc_test);
    console.log(out_rpc_test);
    console.log("End: Test_ChangeDDnsClientHostname");
    console.log("-----");
    console.log();
}
async function Test_RegenerateServerCert(): Promise<void>
{
    console.log("Begin: Test_RegenerateServerCert");
    let out_rpc_test: VPN.VpnRpcTest = await api.RegenerateServerCert();
    console.log(out_rpc_test);
    console.log("End: Test_RegenerateServerCert");
    console.log("-----");
    console.log();
}
async function Test_MakeOpenVpnConfigFile(): Promise<void>
{
    console.log("Begin: Test_MakeOpenVpnConfigFile");
    let out_rpc_read_log_file: VPN.VpnRpcReadLogFile = await api.MakeOpenVpnConfigFile();
    console.log(out_rpc_read_log_file);
    console.log("End: Test_MakeOpenVpnConfigFile");
    console.log("-----");
    console.log();
}
async function Test_SetSpecialListener(): Promise<void>
{
    console.log("Begin: Test_SetSpecialListener");
    let in_rpc_special_listener: VPN.VpnRpcSpecialListener =
    {
        VpnOverDnsListener_bool: true,
        VpnOverIcmpListener_bool: true,
    };
    let out_rpc_special_listener: VPN.VpnRpcSpecialListener = await api.SetSpecialListener(in_rpc_special_listener);
    console.log(out_rpc_special_listener);
    console.log("End: Test_SetSpecialListener");
    console.log("-----");
    console.log();
}
async function Test_GetSpecialListener(): Promise<void>
{
    console.log("Begin: Test_GetSpecialListener");
    let out_rpc_special_listener: VPN.VpnRpcSpecialListener = await api.GetSpecialListener();
    console.log(out_rpc_special_listener);
    console.log("End: Test_GetSpecialListener");
    console.log("-----");
    console.log();
}
async function Test_GetAzureStatus(): Promise<void>
{
    console.log("Begin: Test_GetAzureStatus");
    let out_rpc_azure_status: VPN.VpnRpcAzureStatus = await api.GetAzureStatus();
    console.log(out_rpc_azure_status);
    console.log("End: Test_GetAzureStatus");
    console.log("-----");
    console.log();
}
async function Test_SetAzureStatus(): Promise<void>
{
    console.log("Begin: Test_SetAzureStatus");
    let in_rpc_azure_status: VPN.VpnRpcAzureStatus =
    {
        IsEnabled_bool: true,
    };
    let out_rpc_azure_status: VPN.VpnRpcAzureStatus = await api.SetAzureStatus(in_rpc_azure_status);
    console.log(out_rpc_azure_status);
    console.log("End: Test_SetAzureStatus");
    console.log("-----");
    console.log();
}
async function Test_GetDDnsInternetSettng(): Promise<void>
{
    console.log("Begin: Test_GetDDnsInternetSettng");
    let out_internet_setting: VPN.VpnInternetSetting = await api.GetDDnsInternetSettng();
    console.log(out_internet_setting);
    console.log("End: Test_GetDDnsInternetSettng");
    console.log("-----");
    console.log();
}
async function Test_SetDDnsInternetSettng(): Promise<void>
{
    console.log("Begin: Test_SetDDnsInternetSettng");
    let in_internet_setting: VPN.VpnInternetSetting =
    {
        ProxyType_u32: VPN.VpnRpcProxyType.Direct,
        ProxyHostName_str: "1.2.3.4",
        ProxyPort_u32: 1234,
        ProxyUsername_str: "neko",
        ProxyPassword_str: "dog",
    };
    let out_internet_setting: VPN.VpnInternetSetting = await api.SetDDnsInternetSettng(in_internet_setting);
    console.log(out_internet_setting);
    console.log("End: Test_SetDDnsInternetSettng");
    console.log("-----");
    console.log();
}
async function Test_SetVgsConfig(): Promise<void>
{
    console.log("Begin: Test_SetVgsConfig");
    let in_vgs_config: VPN.VpnVgsConfig =
    {
        IsEnabled_bool: false,
        Message_utf: "ねこさん",
        Owner_utf: "それいけ",
        Abuse_utf: "da.test@softether.co.jp",
        NoLog_bool: false,
        LogPermanent_bool: true,
        EnableL2TP_bool: true,
    };
    let out_vgs_config: VPN.VpnVgsConfig = await api.SetVgsConfig(in_vgs_config);
    console.log(out_vgs_config);
    console.log("End: Test_SetVgsConfig");
    console.log("-----");
    console.log();
}
async function Test_GetVgsConfig(): Promise<void>
{
    console.log("Begin: Test_GetVgsConfig");
    let out_vgs_config: VPN.VpnVgsConfig = await api.GetVgsConfig();
    console.log(out_vgs_config);
    console.log("End: Test_GetVgsConfig");
    console.log("-----");
    console.log();
}

// --- Types ---

// --- Stubs ---

// --- Tests ---

